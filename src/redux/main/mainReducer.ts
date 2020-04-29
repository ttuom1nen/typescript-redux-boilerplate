import { ActionTypes, Action } from "./mainInterfaces";
import { initialState } from "../initialState";

export const themeReducer = (
  state: string = initialState.theme,
  action: Action
): string => {
  switch (action.type) {
    case ActionTypes.SwitchTheme:
      return action.payload;
    default:
      return state;
  }
};
