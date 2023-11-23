import { ActionCreator } from "redux";

export const SET_SEARCH = 'SET_SEARCH';

export type SetSearchAction = {
  type: typeof SET_SEARCH;
  search: string;
}

export const setSearch: ActionCreator<SetSearchAction> = (search) => ({
  type: SET_SEARCH,
  search
})
