import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Material UI imports
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import "@fontsource/outfit";
import "@fontsource/roboto";

// Custom MUI theme (optional)
const theme = createTheme({
  palette: {
    mode: "dark", // Change to "light" if needed
    primary: {
      main: "#90caf9",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
  },
  typography: {
    fontFamily: "Outfit, Roboto, sans-serif",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Normalize styles + apply MUI baseline */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
