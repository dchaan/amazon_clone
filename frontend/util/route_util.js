import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router";
import { withRouter } from "react-router-dom";

const mSTP = state => (
  {loggedIn: Boolean(state.session.id)}
);

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => !loggedIn ? <Component {... props} /> : <Redirect to='/' />}/>
)

const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => loggedIn ? <Component {...props} /> : <Redirect to="/login" />} />
)

export const AuthRoute = withRouter(connect(mSTP, null)(Auth))
export const ProtectedRoute = withRouter(connect(mSTP)(Protected))