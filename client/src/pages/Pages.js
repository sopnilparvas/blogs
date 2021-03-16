import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function Pages() {
  return (
    <Switch>
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/about' component={About} />
      <Route exact path='/' component={Home} />
    </Switch>
  );
}

export default Pages;
