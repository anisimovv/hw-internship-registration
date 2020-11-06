import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";

import Navigation from "../Navigation/Navigation";
import UserList from "../UserList/UserList";
import Registration from "../Registration/Registration";

class App extends Component {
  state = {
    users: [],
  }

  addUser = (user) => {
    this.setState((prevState) => {
      return {
        users: [...prevState.users, { ...user }],
      };
    });
  };

  render() {
    return (
      <Router>
        <Navigation />
        <Switch>
          <Route path="/add-user">
            <Registration addUser={this.addUser} />
          </Route>
          <Route path="/user-list">
            <UserList users={this.state.users} />
          </Route>
          <Route path="/about-me">About me</Route>
          <Route path="/">
            <Redirect to="/add-user" />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
