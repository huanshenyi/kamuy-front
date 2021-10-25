import React from "react";
import ReactDOM from "react-dom";
import Router from "./Router";
import "antd/dist/antd.css";
import { AppStateProvider } from "./AppState";

ReactDOM.render(
  <AppStateProvider>
    <Router />
  </AppStateProvider>,
  document.getElementById("root")
);
