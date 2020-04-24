import * as React from "react";
import { Menu, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export interface INavBarProps {}

export default class NavBar extends React.Component<INavBarProps> {
  public render() {
    return (
      <Menu>
        <Menu.Item
          as={Link}
          to={`/`} /*Will be home the profile page? */
          name="home"
        >
          Home
        </Menu.Item>

        <Menu.Item as={Link} to={`/newsfeed`} name="newsfeed">
          Newsfeed
        </Menu.Item>

        <Menu.Item as={Link} to={`/profile`} name="profile">
          Profile
        </Menu.Item>
      </Menu>
    );
  }
}