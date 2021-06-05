import React, { Component } from "react";
import AuthContext from "./context/AuthContext";
import Login from "./components/Login";

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <AuthContext>
          <Login></Login>
        </AuthContext>
      </div>
    );
  }
}
