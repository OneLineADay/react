import React from "react";
import { Switch } from "react-router-dom";
import Signup from "pages/Signup";
import Login from "pages/Login";
import Dashboard from "pages/Dashboard";
import PrivateRoute from "containers/PrivateRoute";
import RedirectRoute from "containers/RedirectRoute";

function App({ user }) {
  return (
    <Switch>
      <PrivateRoute exact path="/" component={Dashboard} />
      <RedirectRoute path="/login" component={Login} />
      <RedirectRoute path="/signup" component={Signup} />
    </Switch>
  );
}

export default App;
