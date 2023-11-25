import { ActionCreator } from "redux";

export const SET_UPLOADED_IMAGE = 'SET_UPLOADED_IMAGE';

export type SetUploadedImageAction = {
  type: typeof SET_UPLOADED_IMAGE;
  uploadedImage: string;
}

export const setUploadedImage: ActionCreator<SetUploadedImageAction> = (uploadedImage) => ({
  type: SET_UPLOADED_IMAGE,
  uploadedImage
})
