import React from "react";
import { Switch, Route } from "react-router";

//pages
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Profile} path="/profile" />
      </Switch>
    </>
  );
}

export default App;
