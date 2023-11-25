import { ActionCreator } from "redux";

export const SET_PROCESSED_IMAGE = 'SET_PROCESSED_IMAGE';

export type SetProcessedImageAction = {
  type: typeof SET_PROCESSED_IMAGE;
  processedImage: string;
}

export const setProcessedImage: ActionCreator<SetProcessedImageAction> = (processedImage) => ({
  type: SET_PROCESSED_IMAGE,
  processedImage
})
