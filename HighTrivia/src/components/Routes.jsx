import React from "react";
import { Route, Redirect } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import { useSelector } from "react-redux";

function PrivateRoute({ component: Component, ...rest }) {
  const isLogin = useSelector(state => state.access.isLogin);
  return (
    <Route
      {...rest}
      render={props => {
        if (isLogin || isLogin === null) {
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
  const isLogin = useSelector(state => state.access.isLogin);
  return (
    <Route
      {...rest}
      render={props =>
        isLogin && OnlyPublic ? <Home {...props} /> : <Component {...props} />
      }
    />
  );
}

export { PrivateRoute, PublicRoute };
