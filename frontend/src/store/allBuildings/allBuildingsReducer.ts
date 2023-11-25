import {initialState} from "../reducer";
import {SET_ALL_BUILDINGS, SetAllBuildingsAction} from "./allBuildingsActions";

export interface IAllBuildingsState {
  allBuildings: number;
}

type AllBuildingsActions = SetAllBuildingsAction;

export const allBuildingsReducer = (state = initialState.allBuildings, action: AllBuildingsActions): IAllBuildingsState => {
  switch (action.type) {
    case SET_ALL_BUILDINGS:
      return {
        ...state,
        allBuildings: action.allBuildings
      }
    default:
      return state;
  }
}
