import {filteringReducer, IFilteringState} from "./filtering/filteringReducer";
import {SET_FILTERING, SetFilteringAction} from "./filtering/filteringActions";
import {ISearchState, searchReducer} from "./search/searchReducer";
import {SET_SEARCH, SetSearchAction} from "./search/searchActions";
import {clientReducer, IClientState} from "./client/clientReducer";
import {SET_CLIENT, SetClientAction} from "./client/clientActions";
import {IRouteState, routeReducer} from "./route/routeReducer";
import {SET_ROUTE, SetRouteAction} from "./route/routeActions";
import {IStartButtonClickedState, startButtonClickedReducer} from "./startButtonClicked/startButtonClickedReducer";
import {SET_START_BUTTON_CLICKED, SetStartButtonClickedAction} from "./startButtonClicked/startButtonClickedActions";

export interface IInitialState {
  filtering: IFilteringState;
  search: ISearchState;
  client: IClientState;
  route: IRouteState;
  startButtonClicked: IStartButtonClickedState;
}

export const initialState: IInitialState = {
  filtering: {
    filtering: false
  },
  search: {
    search: ""
  },
  client: {
    client: "физическое"
  },
  route: {
    route: "пешеходный"
  },
  startButtonClicked: {
    startButtonClicked: false
  }
}

type Actions = SetFilteringAction | SetSearchAction | SetClientAction | SetRouteAction | SetStartButtonClickedAction

export const rootReducer = (state = initialState, action: Actions): IInitialState => {
  switch (action.type) {
    case SET_FILTERING:
      return {
        ...state,
        filtering: filteringReducer(state.filtering, action)
      }
    case SET_SEARCH:
      return {
        ...state,
        search: searchReducer(state.search, action)
      }
    case SET_CLIENT:
      return {
        ...state,
        client: clientReducer(state.client, action)
      }
    case SET_ROUTE:
      return {
        ...state,
        route: routeReducer(state.route, action)
      }
    case SET_START_BUTTON_CLICKED:
      return {
        ...state,
        startButtonClicked: startButtonClickedReducer(state.startButtonClicked, action)
      }
    default:
      return state;
  }
}
