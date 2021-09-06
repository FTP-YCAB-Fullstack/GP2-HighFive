import React from "react";
// import QuestionPage from "../components/QuestionPage";

// function Question() {
//   return <>
//   <QuestionPage />
//   </>
// }

import { Route, Switch, Redirect } from "react-router-dom";
import Quiz from "../components/Quiz";

function Question() {
  return (
    <div className="flex flex-col">
      {/* <nav className="flex justify-between bg-red-700 p-3  w-full">
        <span>MAWAR MELATI</span>
      </nav> */}

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
