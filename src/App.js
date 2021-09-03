import React from "react";
import Home from "./Pages/Home"

import ButtonAppBar from "./Components/ButtonAppBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
    <ButtonAppBar />
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/home" component={Home} />

  </Switch>
  </div>
  );
};

export default App;
