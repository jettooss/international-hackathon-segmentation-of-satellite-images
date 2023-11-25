import {IStartButtonClickedState, startButtonClickedReducer} from "./startButtonClicked/startButtonClickedReducer";
import {SET_START_BUTTON_CLICKED, SetStartButtonClickedAction} from "./startButtonClicked/startButtonClickedActions";
import {IImageLoadedState, imageLoadedReducer} from "./imageLoaded/imageLoadedReducer";
import {SET_IMAGE_LOADED, SetImageLoadedAction} from "./imageLoaded/imageLoadedActions";
import {IProcessedImageState, processedImageReducer} from "./processedImage/processedImageReducer";
import {SET_PROCESSED_IMAGE, SetProcessedImageAction} from "./processedImage/processedImageActions";
import {IUploadedImageState, uploadedImageReducer} from "./uploadedImage/uploadedImagesReducer";
import {SET_UPLOADED_IMAGE, SetUploadedImageAction} from "./uploadedImage/uploadedImageActions";

export interface IInitialState {
  startButtonClicked: IStartButtonClickedState;
  imageLoaded: IImageLoadedState;
  processedImage: IProcessedImageState;
  uploadedImage: IUploadedImageState;
}

export const initialState: IInitialState = {
  startButtonClicked: {
    startButtonClicked: false
  },
  imageLoaded: {
    imageLoaded: false
  },
  processedImage: {
    processedImage: ""
  },
  uploadedImage: {
    uploadedImage: ""
  }
}

type Actions = SetStartButtonClickedAction | SetImageLoadedAction | SetProcessedImageAction | SetUploadedImageAction

export const rootReducer = (state = initialState, action: Actions): IInitialState => {
  switch (action.type) {
    case SET_START_BUTTON_CLICKED:
      return {
        ...state,
        startButtonClicked: startButtonClickedReducer(state.startButtonClicked, action)
      }
    case SET_IMAGE_LOADED:
      return {
        ...state,
        imageLoaded: imageLoadedReducer(state.imageLoaded, action)
      }
    case SET_PROCESSED_IMAGE:
      return {
        ...state,
        processedImage: processedImageReducer(state.processedImage, action)
      }
    case SET_UPLOADED_IMAGE:
      return {
        ...state,
        uploadedImage: uploadedImageReducer(state.uploadedImage, action)
      }
    default:
      return state;
  }
}
