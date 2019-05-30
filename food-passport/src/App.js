import React, { Component } from "react";
import StyledApp from "./styles/StyledApp";
import PassportForm from './components/PassportForm';
import PassportStamps from "./components/PassportStamps";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stamps: [],
    };
  }
  render() {
    return (
      <StyledApp>
        <PassportForm/>
        <PassportStamps stamps={this.state.stamps}/>
        <h1>hello</h1>
      </StyledApp>
    );
  }
}

export default App;
