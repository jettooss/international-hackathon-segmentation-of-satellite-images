import {initialState} from "../reducer";
import {SET_PROCESSED_IMAGE, SetProcessedImageAction} from "./processedImageActions";

export interface IProcessedImageState {
  processedImage: string;
}

type ProcessedImageActions = SetProcessedImageAction;

export const processedImageReducer = (state = initialState.processedImage, action: ProcessedImageActions): IProcessedImageState => {
  switch (action.type) {
    case SET_PROCESSED_IMAGE:
      return {
        ...state,
        processedImage: action.processedImage
      }
    default:
      return state;
  }
}
