import ReactDOM from "react-dom";
import Router from "./router";
import "antd/dist/antd.css";
import { AppStateProvider } from "./AppState";

ReactDOM.render(
  <AppStateProvider>
    <Router />
  </AppStateProvider>,
  document.getElementById("root")
);
