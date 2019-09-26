import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Signup from "./containers/Signup/Signup";
import Login from "./containers/Login/Login";
import { Navigation } from "./containers/Navigation/Navigation";
import Calendar from "./components/Calendar/Calender";
import { selectToken as token } from "./redux/user/user.selectors";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (!token ? <Redirect to="/login" /> : <Calendar />)}
        />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
