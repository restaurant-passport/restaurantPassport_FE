import React, { Component } from "react";
import { Route } from "react-router-dom";
import StyledApp from "./styles/StyledApp";
import { connect } from "react-redux";
import { getPassports } from "./store/actions";
import PrivateRoute from "./components/Authentication/PrivateRoute";
import LoginPage from "./components/Authentication/LoginPage";
import LandingPage from "./components/LandingPage";
import PassportList from "./components/PassportList";
import PassportForm from "./components/PassportForm";
import Passport from "./components/Passport";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

class App extends Component {
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (localStorage.getItem("data")) {
      this.props.getData(JSON.parse(localStorage.getItem("data")));
    }
  }

  render() {
    return (
      <StyledApp>
        <NavBar />
        <Route path="/login" component={LoginPage} />
        <Route exact path="/" component={LandingPage} />
        <PrivateRoute exact path="/passports" component={PassportList} />
        <PrivateRoute exact path="/form" component={PassportForm} />
        <PrivateRoute exact path="/passport" component={Passport} />
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
  { getPassports }
)(App);
