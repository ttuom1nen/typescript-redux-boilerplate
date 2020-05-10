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
      main: "#546e7a",
      light: "#819ca9",
      dark: "#29434e",
    },
    text: {
      primary: "#fff",
    },
  },
});
