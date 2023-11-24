import { ActionCreator } from "redux";

export const SET_IMAGE_LOADED = 'SET_IMAGE_LOADED';

export type SetImageLoadedAction = {
  type: typeof SET_IMAGE_LOADED;
  setImageLoaded: boolean;
}

export const setImageLoaded: ActionCreator<SetImageLoadedAction> = (setImageLoaded) => ({
  type: SET_IMAGE_LOADED,
  setImageLoaded
})
