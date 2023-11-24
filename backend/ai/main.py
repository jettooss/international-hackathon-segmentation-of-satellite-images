import cv2
import numpy as np
import torch
import segmentation_models_pytorch as smp
from typing import Tuple
from concurrent.futures import ThreadPoolExecutor
from tqdm import tqdm
from functools import partial


def load_segmentation_model() -> Tuple[smp.UnetPlusPlus, torch.device]:
    model = smp.UnetPlusPlus('resnet34', encoder_weights='imagenet', classes=2, activation='softmax')
    device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
    model.to(device)
    model_checkpoint_path = 'ai/model_checkpoint_epoch_15.pth'
    checkpoint = torch.load(model_checkpoint_path, map_location=device)
    model.load_state_dict(checkpoint['model_state_dict'])
    model.eval()
    return model, device


def generate_mask_from_model_output(model_output: torch.Tensor) -> np.ndarray:
    predicted_mask = torch.argmax(model_output, dim=1).squeeze(0)
    return predicted_mask.cpu().numpy()


def process_patch(i, j, patch_size, image, model, device):
    patch = image[i:i + patch_size, j:j + patch_size, :]
    patch_normalized = patch.astype(np.float32) / 255.0
    patch_tensor = torch.from_numpy(patch_normalized).permute(2, 0, 1).unsqueeze(0).to(device)
    with torch.no_grad():
        model_output = model(patch_tensor)
    predicted_patch_mask = generate_mask_from_model_output(model_output)
    return i, j, cv2.resize(predicted_patch_mask, (patch_size, patch_size))


def create_segmentation_mask(image: np.ndarray, patch_size: int, model: smp.UnetPlusPlus,
                             device: torch.device) -> np.ndarray:
    stride_size = 128
    mask = np.zeros((image.shape[0], image.shape[1]), dtype=np.uint8)

    with ThreadPoolExecutor() as executor:
        futures = []
        for i in range(0, image.shape[0] - patch_size + 1, stride_size):
            for j in range(0, image.shape[1] - patch_size + 1, stride_size):
                # Create a partially applied function with the fixed arguments
                process_func = partial(process_patch, i, j, patch_size, image, model, device)
                futures.append(executor.submit(process_func))

        for future in tqdm(futures, total=len(futures), desc="Processing patches"):
            i, j, predicted_patch_mask = future.result()
            resized_mask = cv2.resize(predicted_patch_mask, (patch_size, patch_size))
            mask[i:i + patch_size, j:j + patch_size] = resized_mask

    return mask


def create_colored_mask(mask: np.ndarray) -> np.ndarray:
    color_mask = np.zeros((mask.shape[0], mask.shape[1], 3), dtype=np.uint8)
    color_mask[mask == 1] = [148, 0, 211]  # Class 1: Purple
    return color_mask


def overlay_mask_on_image(original_image: np.ndarray, mask: np.ndarray) -> np.ndarray:
    alpha = 0.5  # Transparency factor for the mask
    if len(mask.shape) == 2:
        mask = cv2.cvtColor(mask, cv2.COLOR_GRAY2BGR)
    overlayed_image = cv2.addWeighted(original_image, 1, mask, alpha, 0)
    return overlayed_image


def process_image_for_segmentation(file_path: str):
    original_image = cv2.imread(file_path)
    model, device = load_segmentation_model()
    segmentation_mask = create_segmentation_mask(original_image, 256, model, device)
    colored_mask = create_colored_mask(segmentation_mask)
    overlayed_image = overlay_mask_on_image(original_image, colored_mask)
    cv2.imwrite(file_path, overlayed_image)
