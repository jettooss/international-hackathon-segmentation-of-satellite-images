import {initialState} from "../reducer";
import {SET_FILTERING, SetFilteringAction} from "./filteringActions";

export interface IFilteringState {
  filtering: boolean;
}

type FilteringActions = SetFilteringAction;

export const filteringReducer = (state = initialState.filtering, action: FilteringActions): IFilteringState => {
  switch (action.type) {
    case SET_FILTERING:
      return {
        ...state,
        filtering: action.filtering
      }
    default:
      return state;
  }
}
