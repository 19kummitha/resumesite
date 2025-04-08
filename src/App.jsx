import React from "react";
import { CssBaseline, Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Certifications } from "./components/Certifications/Certifications";
import { Education } from "./components/Education/Education";

// Optional: Custom theme (or use default)
const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0f172a", // Replace with var(--color-bg) if using a theme
    },
    text: {
      primary: "#ffffff",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          backgroundColor: "background.default",
          width: "100%",
          height: "100%",
          overflowX: "hidden",
        }}
      >
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
      </Box>
    </ThemeProvider>
  );
}

export default App;
