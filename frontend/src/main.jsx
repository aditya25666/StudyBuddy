import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./context/AuthContext";

import App from "./App";

import "./index.css";
import "./styles/globals.css";
import "./styles/animations.css";
import "./styles/scrollbar.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>

);