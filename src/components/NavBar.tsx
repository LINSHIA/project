import * as React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export interface INavBarProps {}

export default class NavBar extends React.Component<INavBarProps> {
  public render() {
    return (
      <Menu>
        <Menu.Item as={Link} to={`/newsfeed`} name="newsfeed">
          newsfeed
        </Menu.Item>

        <Menu.Item as={Link} to={`/profile`} name="profile">
          Profile
        </Menu.Item>
        <Menu.Item as={Link} to={`/`} name="LogOut">
          Logout
        </Menu.Item>
      </Menu>
    );
  }
}
