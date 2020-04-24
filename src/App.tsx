import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/login";
import Newsfeed from "./components/newsfeed";
import Profile from "./components/profile";
import SignUp from "./components/signup";
import NavBar from "./components/NavBar";
import "./index.css";
import "./App.css";
import "./components/home.jpg";

export interface IAppProps {}

export class App extends React.Component<IAppProps> {
  public render() {
    return (
      <Router>
        <NavBar />

        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/newsfeed" component={Newsfeed} />
          <Route path="/profile" component={Profile} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </Router>
    );
  }
}

export default App;
