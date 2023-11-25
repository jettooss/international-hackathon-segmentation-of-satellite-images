import {initialState} from "../reducer";
import {SET_LARGE_BUILDINGS, SetLargeBuildingsAction} from "./largeBuildingsActions";

export interface ILargeBuildingsState {
  largeBuildings: number;
}

type LargeBuildingsActions = SetLargeBuildingsAction;

export const largeBuildingsReducer = (state = initialState.largeBuildings, action: LargeBuildingsActions): ILargeBuildingsState => {
  switch (action.type) {
    case SET_LARGE_BUILDINGS:
      return {
        ...state,
        largeBuildings: action.largeBuildings
      }
    default:
      return state;
  }
}
