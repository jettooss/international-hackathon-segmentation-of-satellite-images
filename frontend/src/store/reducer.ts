import {IStartButtonClickedState, startButtonClickedReducer} from "./startButtonClicked/startButtonClickedReducer";
import {SET_START_BUTTON_CLICKED, SetStartButtonClickedAction} from "./startButtonClicked/startButtonClickedActions";
import {IImageLoadedState, imageLoadedReducer} from "./imageLoaded/imageLoadedReducer";
import {SET_IMAGE_LOADED, SetImageLoadedAction} from "./imageLoaded/imageLoadedActions";

export interface IInitialState {
  startButtonClicked: IStartButtonClickedState;
  imageLoaded: IImageLoadedState;
}

export const initialState: IInitialState = {
  startButtonClicked: {
    startButtonClicked: false
  },
  imageLoaded: {
    imageLoaded: false
  }
}

type Actions = SetStartButtonClickedAction | SetImageLoadedAction

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
    default:
      return state;
  }
}
