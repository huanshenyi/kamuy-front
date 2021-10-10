import { Route, HashRouter, Switch } from "react-router-dom";

import LoginPage from "./Pages/Admin/Login";
import SearveLogin from "./Pages/Servers/Login";
import SearveHome from "./Pages/Servers/Home";

export default () => {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route path="/admin/login" exact component={LoginPage} />
          <Route path="/searve/login" exact component={SearveLogin} />
          <Route path="/searve/home" exact component={SearveHome} />
        </Switch>
      </HashRouter>
    </div>
  );
};
