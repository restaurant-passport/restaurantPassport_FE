import React from "react";
import { connect } from "react-redux";
import { registerUser } from "../store/actions/index";
import NavBar from "./NavBar";

class LandingPage extends React.Component {
  state = {
    credentials: {
      username: "",
      password: "",
      email: ""
    }
  };

  handleChange = event => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [event.target.name]: event.target.value
      }
    });
  };

  handleRegister = event => {
    event.preventDefault();
    this.props.registerUser(this.state.credentials).then(() => {
      this.props.history.push("/passports");
    });
  };

  render() {
    return (
      <div>
        <NavBar />
        <div>
          <h1>Welcome to Food Passport!</h1>
          <p>Login to get start collecting your restaurant stamps!</p>
          <p>How many passports can you fill?</p>
          <form onSubmit={this.handleRegister}>
            <h2>Register a new account</h2>
            <input
              type="text"
              placeholder="username"
              name="username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
            />
            <input
              type="password"
              placeholder="password"
              name="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
            />
            <input
              type="text"
              placeholder="email"
              name="email"
              value={this.state.credentials.email}
              onChange={this.handleChange}
            />
            <button>Submit</button>
          </form>
          <button>Login</button>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { registerUser }
)(LandingPage);
