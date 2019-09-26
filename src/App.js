import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Signup from "./containers/Signup/Signup";
import Login from "./containers/Login/Login";
import { Navigation } from "./containers/Navigation/Navigation";
import PrivateRoute from "./components/PrivateRoute";
import Calendar from "./components/Calendar/Calender";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <PrivateRoute exact path="/" component={Calendar} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
