import cv2
import numpy as np
import os

os.environ["SM_FRAMEWORK"] = "tf.keras"
import concurrent.futures
from tqdm import tqdm
import segmentation_models as sm
from keras.models import load_model


def prediction(model, img, patch_size):
    """
    Generate a segmentation mask for the input image using the model with multi-threading.

    :param model: The loaded segmentation model.
    :param img: Input image.
    :param patch_size: Size of the patches to be used for prediction.
    :return: Segmentation mask.
    """
    stride_size = 128
    mask = np.zeros((img.shape[0], img.shape[1]), dtype=np.uint8)
    BACKBONE = 'mobilenet'
    preprocess_input = sm.get_preprocessing(BACKBONE)

    def process_patch(i, j, img, model, preprocess_input):
        img_patch = img[i:i + patch_size, j:j + patch_size, :]
        img_patch = preprocess_input(img_patch)
        img_patch = np.expand_dims(img_patch, axis=0)
        pred_mask = model.predict(img_patch)
        pred_mask = np.argmax(pred_mask, axis=3)[0].astype('uint8')
        return i, j, cv2.resize(pred_mask, (patch_size, patch_size))

    patches = []
    for i in range(0, img.shape[0] - patch_size + 1, stride_size):
        for j in range(0, img.shape[1] - patch_size + 1, stride_size):
            patches.append((i, j))

    with concurrent.futures.ThreadPoolExecutor() as executor:
        futures = [executor.submit(process_patch, i, j, img, model, preprocess_input) for i, j in patches]
        for future in tqdm(concurrent.futures.as_completed(futures), total=len(futures), desc="Processing patches"):
            i, j, pred_patch = future.result()
            mask[i:i + patch_size, j:j + patch_size] = pred_patch

    return mask


def overlay_mask_on_image(original_image: np.ndarray, mask: np.ndarray) -> np.ndarray:
    """
    Overlay the segmentation mask on the original image.

    :param original_image: The original image.
    :param mask: The segmentation mask.
    :return: Image with the mask overlay.
    """
    alpha = 0.5  # Transparency factor for the mask
    if len(mask.shape) == 2:
        mask = cv2.cvtColor(mask, cv2.COLOR_GRAY2BGR)
    overlayed_image = cv2.addWeighted(original_image, 1, mask, alpha, 0)
    return overlayed_image


def create_colored_mask(mask: np.ndarray) -> np.ndarray:
    color_mask = np.zeros((mask.shape[0], mask.shape[1], 3), dtype=np.uint8)
    color_mask[mask == 1] = [148, 0, 211]  # Class 1: Purple
    return color_mask


def count_purple_polygons(mask: np.ndarray, min_size: int = 0) -> int:
    """
    Count the number of purple polygons in the mask.
    A polygon is defined as a contiguous region of purple pixels.

    :param mask: The colored mask where purple polygons are to be counted.
    :param min_size: The minimum size of the polygon to be counted, in pixels.
    :return: The number of polygons that meet the size criteria.
    """
    # Assuming purple is the only color in the mask and is denoted by non-zero values
    # Convert the mask to grayscale for connected component analysis
    gray_mask = cv2.cvtColor(mask, cv2.COLOR_BGR2GRAY)
    _, labels, stats, _ = cv2.connectedComponentsWithStats(gray_mask, connectivity=8, ltype=cv2.CV_32S)

    # Count the number of labels with a pixel area greater than or equal to min_size
    num_polygons = np.sum(stats[1:, cv2.CC_STAT_AREA] >= min_size)

    return num_polygons


def process_image_for_segmentation(file_path: str):
    """
    Process the image for segmentation.

    :param file_path: Path to the input image file.
    """
    model = load_model('ai/model_20.h5', compile=False)
    try:
        original_img = cv2.imread(file_path)
        if original_img is None:
            raise ValueError("Error reading image file")

        patch_size = 256
        min_polygon_size = 100
        predicted_mask = prediction(model, original_img, patch_size)
        colored_mask = create_colored_mask(predicted_mask)
        overlayed_image = overlay_mask_on_image(original_img, colored_mask)
        cv2.imwrite(file_path, overlayed_image)

        all_polygons_count = count_purple_polygons(colored_mask)
        large_polygons_count = count_purple_polygons(colored_mask, min_size=min_polygon_size)

        return [all_polygons_count, large_polygons_count]
    except Exception as e:
        print(f"Error processing image: {e}")
