import { ActionCreator } from "redux";

export const SET_ROUTE = 'SET_ROUTE';

export type SetRouteAction = {
  type: typeof SET_ROUTE;
  route: string;
}

export const setRoute: ActionCreator<SetRouteAction> = (route) => ({
  type: SET_ROUTE,
  route
})
