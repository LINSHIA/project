import React, { Component } from "react";

import { Route } from "react-router-dom";

import NewsFeed from "./newsfeed";
import Profile from "./profile";

class App extends Component {
  state = {
    isLoggedIn: true,
  };

  render() {
    return (
      <div className="App">
        <Route
          render={({ history }) => (
            <button
              type="button"
              onClick={() => {
                history.push("./newsfeed");
              }}
            >
              LogIn
            </button>
          )}
        />
        <Route
          render={({ history }) => (
            <button
              type="button"
              onClick={() => {
                history.push("./profile");
              }}
            >
              SignUp
            </button>
          )}
        />
        {this.state.isLoggedIn ? <NewsFeed /> && <Profile /> : null}
      </div>
    );
  }
}

export default App;
