import {IStartButtonClickedState, startButtonClickedReducer} from "./startButtonClicked/startButtonClickedReducer";
import {SET_START_BUTTON_CLICKED, SetStartButtonClickedAction} from "./startButtonClicked/startButtonClickedActions";
import {IImageLoadedState, imageLoadedReducer} from "./imageLoaded/imageLoadedReducer";
import {SET_IMAGE_LOADED, SetImageLoadedAction} from "./imageLoaded/imageLoadedActions";
import {IProcessedImageState, processedImageReducer} from "./processedImage/processedImageReducer";
import {SET_PROCESSED_IMAGE, SetProcessedImageAction} from "./processedImage/processedImageActions";
import {IUploadedImageState, uploadedImageReducer} from "./uploadedImage/uploadedImagesReducer";
import {SET_UPLOADED_IMAGE, SetUploadedImageAction} from "./uploadedImage/uploadedImageActions";
import {ISwitcherState, switcherReducer} from "./switcher/switcherReducer";
import {SET_SWITCHER, SetSwitcherAction} from "./switcher/switcherActions";
import {allBuildingsReducer, IAllBuildingsState} from "./allBuildings/allBuildingsReducer";
import {SET_ALL_BUILDINGS, SetAllBuildingsAction} from "./allBuildings/allBuildingsActions";
import {ILargeBuildingsState, largeBuildingsReducer} from "./largeBuildings/largeBuildingsReducer";
import {SET_LARGE_BUILDINGS, SetLargeBuildingsAction} from "./largeBuildings/largeBuildingsActions";
import {ISmallBuildingsState, smallBuildingsReducer} from "./smallBuildings/smallBuildingsReducer";
import {SET_SMALL_BUILDINGS, SetSmallBuildingsAction} from "./smallBuildings/smallBuildingsActions";

export interface IInitialState {
  startButtonClicked: IStartButtonClickedState;
  imageLoaded: IImageLoadedState;
  processedImage: IProcessedImageState;
  uploadedImage: IUploadedImageState;
  switcher: ISwitcherState;
  allBuildings: IAllBuildingsState;
  largeBuildings: ILargeBuildingsState;
  smallBuildings: ISmallBuildingsState;
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
  },
  switcher: {
    switcher: false
  },
  allBuildings: {
    allBuildings: 0
  },
  largeBuildings: {
    largeBuildings: 0
  },
  smallBuildings: {
    smallBuildings: 0
  }
}

type Actions = SetStartButtonClickedAction
  | SetImageLoadedAction
  | SetProcessedImageAction
  | SetUploadedImageAction
  | SetSwitcherAction
  | SetAllBuildingsAction
  | SetLargeBuildingsAction
  | SetSmallBuildingsAction

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
    case SET_SWITCHER:
      return {
        ...state,
        switcher: switcherReducer(state.switcher, action)
      }
    case SET_ALL_BUILDINGS:
      return {
        ...state,
        allBuildings: allBuildingsReducer(state.allBuildings, action)
      }
    case SET_LARGE_BUILDINGS:
      return {
        ...state,
        largeBuildings: largeBuildingsReducer(state.largeBuildings, action)
      }
    case SET_SMALL_BUILDINGS:
      return {
        ...state,
        smallBuildings: smallBuildingsReducer(state.smallBuildings, action)
      }
    default:
      return state;
  }
}
