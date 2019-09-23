import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


function App() {


  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' />
          <Route  path='/protected' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
