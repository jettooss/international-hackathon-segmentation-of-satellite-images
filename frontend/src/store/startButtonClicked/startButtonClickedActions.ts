import { ActionCreator } from "redux";

export const SET_START_BUTTON_CLICKED = 'SET_START_BUTTON_CLICKED';

export type SetStartButtonClickedAction = {
  type: typeof SET_START_BUTTON_CLICKED;
  startButtonClicked: boolean;
}

export const setStartButtonClicked: ActionCreator<SetStartButtonClickedAction> = (startButtonClicked) => ({
  type: SET_START_BUTTON_CLICKED,
  startButtonClicked
})
