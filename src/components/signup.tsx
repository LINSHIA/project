import React, { Component } from "react";
import Button from "./Button";
import NewsFeed from "./newsfeed";
import Profile from "./profile";
export interface ISignUpProps {}

class App extends Component {
  state = {
    isSignUP: true,
  };

  render() {
    return (
      <div className="App">
        <Button label={"SignUp"} />
        <h2>Signup my page!!</h2>
        {this.state.isSignUP ? <NewsFeed /> && <Profile /> : null}
      </div>
    );
  }
}

export default App;
