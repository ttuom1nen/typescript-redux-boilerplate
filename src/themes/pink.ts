import { createMuiTheme } from "@material-ui/core";

export const pinkTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#d81b60",
      light: "#ff5c8d",
      dark: "#a00037",
    },
    secondary: {
      main: "#ffebee",
      light: "#ffffff",
      dark: "#ccb9bc",
    },
    text: {
      primary: "#000",
    },
  },
});
