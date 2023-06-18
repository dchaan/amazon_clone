import React from "react";
import { Route } from "react-router";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import LoginContainer from "./session_form/login_container";

const App = () => (
  <div>
    <AuthRoute path='/login' component={LoginContainer} /> 
    <AuthRoute path='/signup' component={SignupContainer} />
  </div>
);

export default App;