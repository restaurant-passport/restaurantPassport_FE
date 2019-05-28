import React, { Component } from "react";
import StyledApp from "./styles/StyledApp";
import { connect } from "react-redux";
import { getCities } from "./store/actions";
import withAuthenticate from "./components/containers/Authentication/withAuthenticate";
import LoginPage from "./components/containers/Authentication/LoginPage";
import PassportList from "./components/containers/PassportList";
import NavBar from "./components/containers/NavBar";
import Footer from "./components/containers/Footer";

const ComponentFromWithAuthenticate = withAuthenticate(PassportList)(LoginPage);

class App extends Component {
  render() {
    return (
      <StyledApp>
        <NavBar />
        <ComponentFromWithAuthenticate />
        <Footer />
      </StyledApp>
    );
  }
}

const mapStateToProps = state => {
  return {
    passports: state.passports,
    loadingPassports: state.loadingPassports
  };
};

export default connect(
  mapStateToProps,
  { getCities }
)(App);
