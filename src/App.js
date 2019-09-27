import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Signup from "pages/Signup";
import Login from "pages/Login";
import Dashboard from "pages/Dashboard";
import PrivateRoute from "components/PrivateRoute";
import { createStructuredSelector } from "reselect";
import { selectToken } from "redux/user/user.selectors";

function App({ user }) {
  return (
    <Switch>
      <PrivateRoute exact path="/" component={Dashboard} />
      <Route
        path="/login"
        component={() => (user ? <Redirect to="/" /> : <Login />)}
      />
      <Route
        path="/signup"
        component={() => (user ? <Redirect to="/" /> : <Signup />)}
      />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
}

const mapStateToProps = createStructuredSelector({
  user: selectToken
});

export default connect(mapStateToProps)(App);
