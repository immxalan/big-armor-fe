import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

import Home from "./pages/Home";
import API from "./pages/API";
import Model from "./pages/Model";
import About from "./pages/About";
import TryIt from "./pages/TryIt";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/try-it">
            <TryIt />
          </Route>
          <Route path="/api-docs">
            <API />
          </Route>
          <Route path="/model-docs">
            <Model />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
