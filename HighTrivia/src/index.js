import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Question from "./pages/Question";
import { PublicRoute, PrivateRoute } from "./components/Routes";
import Result from "./pages/Result";
import Register from "./pages/Register";
import Leaderboard from "./pages/Leaderboard";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <PublicRoute onlyPublic={false} exact path="/" component={Home} />
        <PublicRoute onlyPublic={true} exact path="/login" component={Login} />
        <PublicRoute
          onlyPublic={true}
          exact
          path="/register"
          component={Register}
        />
        <PublicRoute
          onlyPublic={false}
          exact
          path="/leaderboard"
          component={Leaderboard}
        />
        <PrivateRoute path="/question/" component={Question} />
        <PrivateRoute exact path="/result" component={Result} />
        <PublicRoute onlyPublic={false} exact path="*">
          <h1>404 Page Not Found</h1>
        </PublicRoute>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
