import { createMuiTheme } from "@material-ui/core";

export const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#1976d2",
      light: "#63a4ff",
      dark: "#004ba0",
    },
    secondary: {
      main: "#ff8a80",
      light: "#ffbcaf",
      dark: "#c85a54",
    },
    text: {
      primary: "#000",
    },
  },
});
