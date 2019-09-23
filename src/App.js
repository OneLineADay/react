import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { Signup } from "./containers/Signup";
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Log in</h2>
        <Login />
        
        <h2>Sign up</h2>
        <Signup />
      </header>
      <Router>
        <Switch>
          <Route exact path="/" />
          <Route path="/protected" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
