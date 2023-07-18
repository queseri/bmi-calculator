import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";

import App from "./App.tsx";
import "./index.css";

const theme = createTheme({
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
