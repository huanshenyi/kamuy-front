import { Route, HashRouter, Switch, Redirect } from "react-router-dom";

import AdminLogin from "../Pages/Admin/Login";
import AdminHome from "../Pages/Admin/Home";
import SearveLogin from "../Pages/Servers/Login";
import SearveHome from "../Pages/Servers/Home";
import AdminMember from "../Pages/Admin/Member";

import AdminLayout from "Layouts/Admin";

import {
  SERVICE_HOME_PATH,
  SERVICE_LOGIN_PATH,
  ADMIN_HOME_PATH,
  ADMIN_LOGIN_PATH,
  ADMIN_MEMBER_PATH,
} from "Router/paths";

export default () => {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route path={ADMIN_LOGIN_PATH} exact component={AdminLogin} />
          <Route>
            <AdminLayout>
              <Route
                exact={true}
                path={ADMIN_HOME_PATH}
                component={AdminHome}
              />
              <Route
                exact={true}
                path={ADMIN_MEMBER_PATH}
                component={AdminMember}
              />
            </AdminLayout>
          </Route>
          <Route path={SERVICE_LOGIN_PATH} exact component={SearveLogin} />
          <Route path={SERVICE_HOME_PATH} exact component={SearveHome} />
          <Redirect from="/*" to={SERVICE_HOME_PATH} />
        </Switch>
      </HashRouter>
    </div>
  );
};
