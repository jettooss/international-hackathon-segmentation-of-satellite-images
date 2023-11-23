import {initialState} from "../reducer";
import {SET_CLIENT, SetClientAction} from "./clientActions";

export interface IClientState {
  client: string;
}

type ClientActions = SetClientAction;

export const clientReducer = (state = initialState.client, action: ClientActions): IClientState => {
  switch (action.type) {
    case SET_CLIENT:
      return {
        ...state,
        client: action.client
      }
    default:
      return state;
  }
}
