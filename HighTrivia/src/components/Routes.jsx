import React from "react";
import { Route } from "react-router-dom";
import access from "../utils/access";
import Home from "../pages/Home";
import Question from "../pages/Question";

function PrivateRoute({ component: Component, isQuiz: IsQuiz, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => {
        if (access.isLogin()) {
          if (IsQuiz) {
            return <Question />;
          } else {
            return <Component {...props} />;
          }
        } else {
          return <Home />;
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
        access.isLogin() && OnlyPublic ? <Home /> : <Component {...props} />
      }
    />
  );
}

export { PrivateRoute, PublicRoute };
