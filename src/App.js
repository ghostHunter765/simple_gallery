import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AuthContext from "./context/AuthContext";
import Login from "./components/Login";
import Signin from "./components/Signin";
import Dashboard from "./components/DashBoard";
import PasswordReset from "./components/PasswordReset";

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <AuthContext>
          <Switch>
            <Route path="/login" component={Login}></Route>
            <Route path="/signin" component={Signin}></Route>
            <Route path="/resetpw" component={PasswordReset}></Route>
            <Route exact path="/" component={Dashboard}></Route>
            <Redirect to="/"></Redirect>
          </Switch>
        </AuthContext>
      </div>
    );
  }
}
