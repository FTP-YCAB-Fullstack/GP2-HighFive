import React from "react";

import { Route, Switch, Redirect } from "react-router-dom";
import Quiz from "../components/Quiz";

function Question() {
  return (
    <div>
      <Switch>
        <Route path="/question/:id">
          <Quiz />
        </Route>
        <Route path="/question">
          <Redirect to="/question/0" />
        </Route>
      </Switch>
    </div>
  );
}

export default Question;
