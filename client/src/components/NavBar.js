import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import SignUpPage from "./SignUpPage";
import LoginPage from "./LoginPage";
import NotFound from "./NotFound";
import LoginForm from "./LoginForm";

function NavBar() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/login">
        <LoginForm />
      </Route>
      <Route exact path="/signup">
        <SignUpPage />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default NavBar;