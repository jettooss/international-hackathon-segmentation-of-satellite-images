import { ActionCreator } from "redux";

export const SET_CLIENT = 'SET_CLIENT';

export type SetClientAction = {
  type: typeof SET_CLIENT;
  client: string;
}

export const setClient: ActionCreator<SetClientAction> = (client) => ({
  type: SET_CLIENT,
  client
})
