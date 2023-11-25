import { ActionCreator } from "redux";

export const SET_LARGE_BUILDINGS = 'SET_LARGE_BUILDINGS';

export type SetLargeBuildingsAction = {
  type: typeof SET_LARGE_BUILDINGS;
  largeBuildings: number;
}

export const setLargeBuildings: ActionCreator<SetLargeBuildingsAction> = (largeBuildings) => ({
  type: SET_LARGE_BUILDINGS,
  largeBuildings
})
