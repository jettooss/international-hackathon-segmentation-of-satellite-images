import { ActionCreator } from "redux";

export const SET_ALL_BUILDINGS = 'SET_ALL_BUILDINGS';

export type SetAllBuildingsAction = {
  type: typeof SET_ALL_BUILDINGS;
  allBuildings: number;
}

export const setAllBuildings: ActionCreator<SetAllBuildingsAction> = (allBuildings) => ({
  type: SET_ALL_BUILDINGS,
  allBuildings
})
