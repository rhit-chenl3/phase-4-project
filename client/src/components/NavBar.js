import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import SignUpPage from "./SignUpPage";
import LoginPage from "./LoginPage";

function NavBar() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/login">
        <LoginPage />
      </Route>
      <Route exact path="/signup">
        <SignUpPage />
      </Route>
    </Switch>
  );
}

export default NavBar;