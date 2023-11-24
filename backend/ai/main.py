import cv2
import numpy as np
import os

os.environ["SM_FRAMEWORK"] = "tf.keras"
from tqdm import tqdm
import segmentation_models as sm
from tensorflow.keras.models import load_model


def load_segmentation_model(model_path: str = 'ai/model_20.h5'):
    """
    Load the trained segmentation model.

    :param model_path: Path to the trained model file.
    :return: Loaded model.
    """
    model = load_model(model_path)
    return model


def prediction(model, img, patch_size):
    """
    Generate a segmentation mask for the input image using the model.

    :param model: The loaded segmentation model.
    :param img: Input image.
    :param patch_size: Size of the patches to be used for prediction.
    :return: Segmentation mask.
    """
    stride_size = 128
    mask = np.zeros((img.shape[0], img.shape[1]), dtype=np.uint8)
    BACKBONE = 'mobilenet'

    preprocess_input = sm.get_preprocessing(BACKBONE)
    total_patches = ((img.shape[0] - patch_size) // stride_size + 1) * ((img.shape[1] - patch_size) // stride_size + 1)
    progress_bar = tqdm(total=total_patches, desc="Processing patches")

    for i in range(0, img.shape[0] - patch_size + 1, stride_size):
        for j in range(0, img.shape[1] - patch_size + 1, stride_size):
            img_patch = img[i:i + patch_size, j:j + patch_size, :]
            img_patch = preprocess_input(img_patch)
            img_patch = np.expand_dims(img_patch, axis=0)
            pred_mask = model.predict(img_patch)
            pred_mask = np.argmax(pred_mask, axis=3)[0].astype('uint8')
            pred_mask = cv2.resize(pred_mask, (patch_size, patch_size))
            mask[i:i + patch_size, j:j + patch_size] = pred_mask
            progress_bar.update(1)

    progress_bar.close()
    return mask


def create_overlay_image(original_img, mask, alpha=0.5):
    """
    Overlay the segmentation mask on the original image.

    :param original_img: The original image.
    :param mask: The segmentation mask.
    :param alpha: Transparency level for the mask overlay.
    :return: Image with the mask overlay.
    """
    # Convert mask to a 3 channel image
    colored_mask = np.zeros_like(original_img)
    for i in range(3):  # Assuming original_img has 3 channels
        colored_mask[:, :, i] = mask

    # Overlay the mask on the original image
    overlayed_image = cv2.addWeighted(original_img, 1, colored_mask, alpha, 0)
    return overlayed_image


def process_image_for_segmentation(file_path: str):
    """
    Process the image for segmentation.

    :param file_path: Path to the input image file.
    :param model: Loaded segmentation model.
    """
    model = load_segmentation_model()
    try:
        original_img = cv2.imread(file_path)
        if original_img is None:
            raise ValueError("Error reading image file")

        patch_size = 256
        predicted_mask = prediction(model, original_img, patch_size)

        # Assuming overlayed_image is generated from original_img and predicted_mask
        overlayed_image = create_overlay_image(original_img, predicted_mask)
        cv2.imwrite(file_path, overlayed_image)

    except Exception as e:
        print(f"Error processing image: {e}")
