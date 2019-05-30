import React, { Component } from "react";
<<<<<<< HEAD
import { Route } from "react-router-dom";
import StyledApp from "./styles/StyledApp";
import { connect } from "react-redux";
import { getPassports } from "./store/actions";
import PrivateRoute from "./components/Authentication/PrivateRoute";
import LoginPage from "./components/Authentication/LoginPage";
import LandingPage from "./components/LandingPage";
import PassportList from "./components/PassportList";
import PassportForm from "./components/PassportForm";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// const ComponentFromWithAuthenticate = withAuthenticate(PassportList)(LoginPage);

class App extends Component {
  // componentDidMount() {
  //   const token = localStorage.getItem("token");
  //   if (localStorage.getItem("data")) {
  //     this.props.getData(JSON.parse(localStorage.getItem("data")));
  //   }
  // }

  render() {
    return (
      <StyledApp>
        <NavBar />
        <Route path="/login" component={LoginPage} />
        <Route exact path="/" component={LandingPage} />
        <PrivateRoute exact path="/passports" component={PassportList} />
        <PrivateRoute exact path="/form" component={PassportForm} />
        {/* <PrivateRoute exact path='/passport' component={Passport} /> */}
        <Footer />
=======
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
>>>>>>> 5a1e635d0f939dd65e08687c01f815d05b153e15
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
