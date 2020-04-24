import React, { Component } from "react";

import Button from "./Button";
import NewsFeed from "./newsfeed";
import Profile from "./profile";

class App extends Component {
  state = {
    isLoggedIn: true,
  };

  render() {
    return (
      <div className="App">
        <Button label={"Login"} />
        <Button label={"SignUp"} />
        {this.state.isLoggedIn ? <NewsFeed /> && <Profile /> : null}
      </div>
    );
  }
}

export default App;
