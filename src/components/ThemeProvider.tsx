import React from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { getThemeByName } from "../themes/base";
import { useSelector } from "react-redux";
import { StoreState } from "../redux/initialState";

export const ThemeContext = React.createContext(
  (themeName: string): void => {}
);

const ThemeProvider: React.FC = (props) => {
  const themeName: string = useSelector((state: StoreState) => state.theme);

  const theme = getThemeByName(themeName);

  return <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>;
};

export default ThemeProvider;
