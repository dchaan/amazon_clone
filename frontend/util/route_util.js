import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router";
import { withRouter } from "react-router-dom"

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) =>
    !loggedIn ? <Component {... props} /> : <Redirect to='/' />
  }
  />
)

const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) =>
    loggedIn ? <Component {...props} /> : <Redirect to="/login" />
  } 
  />
)

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth))
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected))