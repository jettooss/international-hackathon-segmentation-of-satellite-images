import {initialState} from "../reducer";
import {SET_ROUTE, SetRouteAction} from "./routeActions";

export interface IRouteState {
  route: string;
}

type RouteActions = SetRouteAction;

export const routeReducer = (state = initialState.route, action: RouteActions): IRouteState => {
  switch (action.type) {
    case SET_ROUTE:
      return {
        ...state,
        route: action.route
      }
    default:
      return state;
  }
}
