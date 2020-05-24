import { createMuiTheme } from "@material-ui/core";

export const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#424242",
      light: "#6d6d6d",
      dark: "#1b1b1b",
    },
    secondary: {
      main: "#616161",
      light: "#8e8e8e",
      dark: "#373737",
    },
    text: {
      primary: "#fff",
    },
  },
});
