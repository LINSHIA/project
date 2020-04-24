import * as React from "react";

export interface ILogOutPageProps {
  match: any;
}

export default class LogOut extends React.Component<ILogOutPageProps> {
  public render() {
    return (
      <>
        <button onClick={() => sessionStorage.clear()}>Log Out</button>
      </>
    );
  }
}
