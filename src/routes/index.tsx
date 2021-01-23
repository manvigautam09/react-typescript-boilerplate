import React, { ReactNode } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  RouteComponentProps,
  Switch,
} from "react-router-dom";

import Login from "./Login";
import Dashboard from "./Dashboard";
import Landing from "./Landing";
import PageNotFound from "./PageNotFound";
import {
  ROOT_ROUTE,
  LOGIN_ROUTE,
  DASHBOARD_ROUTE,
} from "../utils/routeConstants";

interface RouteConfigProps {
  path: string | string[];
  component: ReactNode;
  name: string;
  exact: boolean;
  privateRoute: boolean;
}

const routesConfig = {
  landing: {
    path: ROOT_ROUTE,
    component: Landing,
    exact: true,
    privateRoute: false,
  },
  login: {
    path: LOGIN_ROUTE,
    component: Login,
    exact: true,
    privateRoute: false,
  },
  home: {
    path: DASHBOARD_ROUTE,
    component: Dashboard,
    exact: true,
    privateRoute: true,
  },
};

interface ProtectedRoutesProps {
  component: any;
  privateRoute: boolean;
}

const ProtectedRoutes = (props: RouteComponentProps & ProtectedRoutesProps) => {
  const { component: Component, privateRoute, ...rest } = props;
  const isUserPresent = localStorage.getItem("accessToken");

  const isValidRoute =
    (privateRoute && isUserPresent) || !(privateRoute || isUserPresent);

  if (isValidRoute) {
    return <Component {...rest} />;
  }

  return <Redirect to={privateRoute ? LOGIN_ROUTE : DASHBOARD_ROUTE} />;
};

const AppRoutes = () => {
  const routes = Object.keys(routesConfig);
  return (
    <Router>
      <Switch>
        {routes.map((route: string) => {
          const config: RouteConfigProps = routesConfig[route];

          return (
            <Route
              exact={config.exact}
              key={`${config.name}`}
              path={config.path}
              render={(props: RouteComponentProps) => {
                return (
                  <ProtectedRoutes
                    component={config.component}
                    privateRoute={config.privateRoute}
                    {...props}
                  />
                );
              }}
            />
          );
        })}

        <Route path="*" render={() => <PageNotFound />} />
      </Switch>
    </Router>
  );
};
export default AppRoutes;
