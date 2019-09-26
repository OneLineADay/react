import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Navigation } from "./containers/Navigation/Navigation";
import PrivateRoute from "./components/PrivateRoute";
import Calendar from "./components/Calender";

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
