import React from "react";
import { Route } from "react-router-dom";
import access from "../utils/access";
import Home from "../pages/Home";
import Login from "../pages/Login";

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => {
        if (access.isLogin()) {
          return <Component {...props} />;
        } else {
          alert("Mohon Login terlebih dahulu");
          return <Login {...props} />;
        }
      }}
    />
  );
}

function PublicRoute({
  component: Component,
  onlyPublic: OnlyPublic,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={props =>
        access.isLogin() && OnlyPublic ? (
          <Home {...props} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}

export { PrivateRoute, PublicRoute };
