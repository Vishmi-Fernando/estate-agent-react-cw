// this is the react entry point

import React from "react";
import ReactDOM from "react-dom/client";   // this use to render react
import { HashRouter } from "react-router-dom";   // enables routing 
import App from "./App";   // import main App component
import "./index.css";   // import global css

// finds <div id = "root"> and attaches React
ReactDOM.createRoot(document.getElementById("root")).render(
  // wraps All so routing works
  <HashRouter>
    <App />
  </HashRouter>
);
