import {initialState} from "../reducer";
import {SET_IMAGE_LOADED, SetImageLoadedAction} from "./imageLoadedActions";

export interface IImageLoadedState {
  imageLoaded: boolean;
}

type ImageLoadedActions = SetImageLoadedAction;

export const imageLoadedReducer = (state = initialState.imageLoaded, action: ImageLoadedActions): IImageLoadedState => {
  switch (action.type) {
    case SET_IMAGE_LOADED:
      return {
        ...state,
        imageLoaded: action.setImageLoaded
      }
    default:
      return state;
  }
}
