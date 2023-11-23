import {initialState} from "../reducer";
import {SET_START_BUTTON_CLICKED, SetStartButtonClickedAction} from "./startButtonClickedActions";

export interface IStartButtonClickedState {
  startButtonClicked: boolean;
}

type StartButtonClickedActions = SetStartButtonClickedAction;

export const startButtonClickedReducer = (state = initialState.startButtonClicked, action: StartButtonClickedActions): IStartButtonClickedState => {
  switch (action.type) {
    case SET_START_BUTTON_CLICKED:
      return {
        ...state,
        startButtonClicked: action.startButtonClicked
      }
    default:
      return state;
  }
}