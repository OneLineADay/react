import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import { Signup } from "./containers/Signup";
// import { Login } from './containers/Login';S
import Login from './containers/Login/Login';
import { Navigation } from './containers/Navigation/Navigation';
import Entries from "./containers/Entries/Entries"

function App() {
  return (
    <div className="App">
      <Navigation />
      <h2>Log in</h2>
      <Login />

      <h2>Sign up</h2>
      <Signup />
      <Router>
        <Switch>
          <Route exact path="/" />
          <Route path="/protected" />
        </Switch>
      </Router>
      <Entries />
    </div>
  );
}

export default App;
