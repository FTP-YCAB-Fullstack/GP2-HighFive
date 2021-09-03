import React from "react";
import { Route, Redirect } from "react-router-dom";
import access from "../utils/access";
import Home from "../pages/Home";

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        access.isLogin() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

function PublicRoute({component: Component, onlyPublic: OnlyPublic, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        access.isLogin() && OnlyPublic ? <Home /> : <Component {...props} />
      }
    />
  );
}

export { PrivateRoute, PublicRoute };
