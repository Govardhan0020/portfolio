import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./hooks/ThemeContext.jsx";
import { HashRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <HashRouter>

  <ThemeProvider>
    <App />
  </ThemeProvider>,
  </HashRouter>
);
