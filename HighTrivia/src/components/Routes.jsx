import React from "react";
import { Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import { useSelector } from "react-redux";
import Loading from "./Loading";

function PrivateRoute({ component: Component, ...rest }) {
  const isLogin = useSelector(state => state.access.isLogin);
  return isLogin === null ? (
    <Loading />
  ) : (
    <Route
      {...rest}
      render={props => {
        if (isLogin) {
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
  return isLogin === null ? (
    <Loading />
  ) : (
    <Route
      {...rest}
      render={props =>
        isLogin && OnlyPublic ? <Home {...props} /> : <Component {...props} />
      }
    />
  );
}

export { PrivateRoute, PublicRoute };
