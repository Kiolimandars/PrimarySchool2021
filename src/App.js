import React, { useState } from "react";

import PrivateRoute from "./Hooks-decorators/PrivateRoute";
import { AuthContext } from "./Hooks-decorators/auth";

import Home from "./Pages/Home";
import Admin from "./Pages/Admin";

import ButtonAppBar from "./Components/ButtonAppBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [authTokens, setAuthTokens] = useState();
  
  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

  return (
    <div>
      <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
        <ButtonAppBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/aziz" />
          <Route exact path="/chiheb" />
          <PrivateRoute exact path="/admin" component={Admin} />
        </Switch>
      </AuthContext.Provider>
    </div>
  );
};

export default App;
