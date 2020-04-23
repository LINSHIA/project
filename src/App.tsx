import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./components/login";
import Newsfeed from "./components/newsfeed";
import Profile from "./components/profile";
import SignUp from "./components/signup";
import "./index.css";
import "./App.css";
import "./components/home.jpg";

export interface IAppProps {}

export class App extends React.Component<IAppProps> {
  public render() {
    return (
      <Router>
        <div className="container">
          <h1> Future Tech</h1>
        </div>

        <ul>
          <li>
            <Link to="/login">Login </Link>
          </li>
          <li>
            <Link to="/signup">SignUp </Link>
          </li>
          <li>
            <Link to="/newsfeed">NewsFeed </Link>
          </li>
          <li>
            <Link to="/profile">Profile </Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/newsfeed" component={Newsfeed} />
          <Route path="/profile" component={Profile} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </Router>
    );
  }
}

export default App;
