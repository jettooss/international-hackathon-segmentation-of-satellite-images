import { ActionCreator } from "redux";

export const SET_SWITCHER = 'SET_SWITCHER';

export type SetSwitcherAction = {
  type: typeof SET_SWITCHER;
  switcher: boolean;
}

export const setSwitcher: ActionCreator<SetSwitcherAction> = (switcher) => ({
  type: SET_SWITCHER,
  switcher
})
