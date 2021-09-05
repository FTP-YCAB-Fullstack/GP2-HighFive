import React from "react";
import { Route } from "react-router-dom";
import access from "../utils/access";
import Home from "../pages/Home";
import Question from "../pages/Question";
import Login from "../pages/Login";

function PrivateRoute({ component: Component, isQuiz: IsQuiz, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => {
        if (access.isLogin()) {
          if (IsQuiz) {
            return <Question {...props} />;
          } else {
            return <Component {...props} />;
          }
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
