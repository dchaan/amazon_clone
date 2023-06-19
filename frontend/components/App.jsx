import React from "react";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import LoginContainer from "./session_form/login_container";
import SignupContainer from "./session_form/signup_container";

const App = () => (
  <div>
    <Link to="/" className="header"><h1>Pawzon</h1></Link>
    <Link to="/login">Login</Link>
    <Switch>
      <Route exact path="/login" component={LoginContainer} />
      <Route exact path="/signup" component={SignupContainer} />
    </Switch>
  </div>
);

export default App;