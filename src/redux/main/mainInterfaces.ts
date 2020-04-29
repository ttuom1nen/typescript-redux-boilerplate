export enum ActionTypes {
  SwitchTheme = "main/switch theme",
}

export interface SwitchThemeAction {
  type: ActionTypes.SwitchTheme;
  payload: string;
}

export type Action = SwitchThemeAction;
