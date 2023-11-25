import {initialState} from "../reducer";
import {SET_SWITCHER, SetSwitcherAction} from "./switcherActions";

export interface ISwitcherState {
  switcher: boolean;
}

type SwitcherActions = SetSwitcherAction;

export const switcherReducer = (state = initialState.switcher, action: SwitcherActions): ISwitcherState => {
  switch (action.type) {
    case SET_SWITCHER:
      return {
        ...state,
        switcher: action.switcher
      }
    default:
      return state;
  }
}
