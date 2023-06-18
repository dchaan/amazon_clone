import React from "react";
import { Route, Switch, Link } from "react-router";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import LoginContainer from "./session_form/login_container";
import SignupContainer from "./session_form/signup_container";

const App = () => (
  <div>
    <Link to="/" className="header"><h1>Pawzon</h1></Link>
    <Link to="/login">Login</Link>
    <Switch>
      <AuthRoute exact path="/login" component={LoginContainer} />
      <AuthRoute exact path="/signup" component={SignupContainer} />
    </Switch>
  </div>
);

export default App;