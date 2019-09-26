import React from "react";
import { Route, Switch } from "react-router-dom";
import Signup from "pages/Signup";
import Login from "pages/Login";
import Dashboard from "pages/Dashboard";
import PrivateRoute from "components/PrivateRoute";


function App() {
  return (

    <Switch>
      <PrivateRoute exact path="/" component={Dashboard} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
}

export default App;
