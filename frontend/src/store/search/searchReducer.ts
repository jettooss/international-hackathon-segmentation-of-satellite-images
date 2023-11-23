import {initialState} from "../reducer";
import {SET_SEARCH, SetSearchAction} from "./searchActions";

export interface ISearchState {
  search: string;
}

type SearchActions = SetSearchAction;

export const searchReducer = (state = initialState.search, action: SearchActions): ISearchState => {
  switch (action.type) {
    case SET_SEARCH:
      return {
        ...state,
        search: action.search
      }
    default:
      return state;
  }
}
