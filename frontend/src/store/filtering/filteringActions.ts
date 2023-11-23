import { ActionCreator } from "redux";

export const SET_FILTERING = 'SET_FILTERING';

export type SetFilteringAction = {
  type: typeof SET_FILTERING;
  filtering: boolean;
}

export const setFiltering: ActionCreator<SetFilteringAction> = (filtering) => ({
  type: SET_FILTERING,
  filtering
})
