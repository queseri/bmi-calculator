import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";

import App from "./App.tsx";
import "./index.css";

const theme = createTheme({
  status: {
    pureWhite: "hsla(0, 0%, 100%, 1)",
    lightGrey: "hsla(200, 24%, 88%, 1)",
    gunMetal: "hsla(215, 31%, 21%, 1)",
    darkElectricBlue: "hsla(215, 17%, 44%, 1)",
    blue: "hsla(227, 92%, 58%, 1)",
  },
  palette: {
    // primary: {
    // light: "hsla(215, 31%, 21%, 1)",
    //  main: "hsla(0, 0,100%, 1)",
    //  },
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    h1: {
      fontSize: "5rem",
    },
  },
});

theme.typography.h1 = {
  fontSize: "4rem",
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
