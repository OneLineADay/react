import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { Signup } from "./containers/Signup";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          TEST
        </a>
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
