import {initialState} from "../reducer";
import {SET_SMALL_BUILDINGS, SetSmallBuildingsAction} from "./smallBuildingsActions";

export interface ISmallBuildingsState {
  smallBuildings: number;
}

type SmallBuildingsActions = SetSmallBuildingsAction;

export const smallBuildingsReducer = (state = initialState.smallBuildings, action: SmallBuildingsActions): ISmallBuildingsState => {
  switch (action.type) {
    case SET_SMALL_BUILDINGS:
      return {
        ...state,
        smallBuildings: action.smallBuildings
      }
    default:
      return state;
  }
}
