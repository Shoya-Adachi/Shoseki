import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1976D2",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#218503",
      contrastText: "#FFFFFF",
    },
    error: { main: "#d32f2f", contrastText: "#FFFFFF" },
    warning: {
      main: "#ed0909",
      contrastText: "#ed0909",
    },
    // info: {},
    // success: {},
  },
});
