import { ActionCreator } from "redux";

export const SET_IMAGE_LOADED = 'SET_IMAGE_LOADED';

export type SetImageLoadedAction = {
  type: typeof SET_IMAGE_LOADED;
  imageLoaded: boolean;
}

export const setImageLoaded: ActionCreator<SetImageLoadedAction> = (imageLoaded) => ({
  type: SET_IMAGE_LOADED,
  imageLoaded
})
