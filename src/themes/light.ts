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
      main: "#e3f2fd",
      light: "#ffffff",
      dark: "#b1bfca",
    },
    text: {
      primary: "#000",
    },
  },
});
