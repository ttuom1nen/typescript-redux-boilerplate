import { SwitchThemeAction, ActionTypes } from "./mainInterfaces";

export const switchTheme = (themeName: string): SwitchThemeAction => {
  return {
    type: ActionTypes.SwitchTheme,
    payload: themeName,
  };
};
