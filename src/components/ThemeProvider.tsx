import React, { useState } from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { getThemeByName } from "../themes/base";

export const ThemeContext = React.createContext(
  (themeName: string): void => {}
);

const ThemeProvider: React.FC = (props) => {
  //const theme: string = useSelector((state: StoreState) => state.theme);

  const [themeName, setThemeName] = useState("lightTheme");

  // State to hold the selected theme name
  // const [themeName, _setThemeName] = useState("lightTheme");

  // Retrieve the theme object by theme name
  const theme = getThemeByName(themeName);

  return (
    <ThemeContext.Provider value={setThemeName}>
      <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
