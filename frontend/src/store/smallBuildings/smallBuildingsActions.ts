import { ActionCreator } from "redux";

export const SET_SMALL_BUILDINGS = 'SET_SMALL_BUILDINGS';

export type SetSmallBuildingsAction = {
  type: typeof SET_SMALL_BUILDINGS;
  smallBuildings: number;
}

export const setSmallBuildings: ActionCreator<SetSmallBuildingsAction> = (smallBuildings) => ({
  type: SET_SMALL_BUILDINGS,
  smallBuildings
})
