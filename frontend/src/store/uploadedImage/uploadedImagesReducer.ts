import {initialState} from "../reducer";
import {SET_UPLOADED_IMAGE, SetUploadedImageAction} from "./uploadedImageActions";

export interface IUploadedImageState {
  uploadedImage: string;
}

type UploadedImageActions = SetUploadedImageAction

export const uploadedImageReducer = (state = initialState.uploadedImage, action: UploadedImageActions): IUploadedImageState => {
  switch (action.type) {
    case SET_UPLOADED_IMAGE:
      return {
        ...state,
        uploadedImage: action.uploadedImage
      }
    default:
      return state;
  }
}
