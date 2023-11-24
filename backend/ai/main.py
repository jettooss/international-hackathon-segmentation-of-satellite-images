import cv2
import numpy as np
import os
import concurrent.futures
from tqdm import tqdm
import segmentation_models as sm
from tensorflow.keras.models import load_model

os.environ["SM_FRAMEWORK"] = "tf.keras"


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
        predicted_mask = prediction(model, original_img, patch_size)
        overlayed_image = overlay_mask_on_image(original_img, predicted_mask)
        cv2.imwrite(file_path, overlayed_image)

    except Exception as e:
        print(f"Error processing image: {e}")
