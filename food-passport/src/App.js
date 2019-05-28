import React, { Component } from "react";
import StyledApp from "./styles/StyledApp";

import NavBar from "./components/containers/NavBar";
import withAuthenticate from "./components/containers/Authentication/withAuthenticate";
import LoginPage from "./components/containers/Authentication/LoginPage";
import PassportList from "./components/containers/PassportList";

const ComponentFromWithAuthenticate = withAuthenticate(PassportList)(LoginPage);

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <StyledApp>
        <NavBar />
        <ComponentFromWithAuthenticate />
      </StyledApp>
    );
  }
}

export default App;
