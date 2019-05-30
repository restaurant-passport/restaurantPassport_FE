import React from "react";
<<<<<<< HEAD
import { connect } from "react-redux";
import { login } from "../../store/actions/index";

import styled from "styled-components";

class LoginPage extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
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

  handleLogin = event => {
    event.preventDefault();
    this.props.login(this.state.credentials).then(() => {
      this.props.history.push("/passports");
    });
=======
import styled from "styled-components";

class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleLogin = event => {
    const user = this.state.username;
    localStorage.setItem("user", user);
    window.location.reload();
>>>>>>> 5a1e635d0f939dd65e08687c01f815d05b153e15
  };

  render() {
    return (
      <LoginPageStyled>
        {/* <i class="" /> some kind of food icon  */}
        <h1>
<<<<<<< HEAD
          Login to see your <span>Food Passports</span>!
        </h1>
        <FormStyled onSubmit={this.handleLogin}>
=======
          Login to your <span>Food Passport</span>!
        </h1>
        <FormStyled>
>>>>>>> 5a1e635d0f939dd65e08687c01f815d05b153e15
          <input
            type="text"
            placeholder="username"
            name="username"
<<<<<<< HEAD
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={this.state.credentials.password}
=======
            value={this.state.username}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="password"
            name="password"
            value={this.state.password}
>>>>>>> 5a1e635d0f939dd65e08687c01f815d05b153e15
            onChange={this.handleChange}
          />
          <button onClick={this.handleLogin}>Log In</button>
        </FormStyled>
      </LoginPageStyled>
    );
  }
}

const LoginPageStyled = styled.div`
  // border: 1px solid black;
<<<<<<< HEAD
  margin: auto;
=======
  margin: 50% auto;
>>>>>>> 5a1e635d0f939dd65e08687c01f815d05b153e15
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
<<<<<<< HEAD

  .fa-instagram {
    font-size: 5rem;
  }
=======
  .fa-instagram {
    font-size: 5rem;
  }
  h1 {
    span {
      font-family: "Dancing Script", cursive;
    }
  }
>>>>>>> 5a1e635d0f939dd65e08687c01f815d05b153e15
`;

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
<<<<<<< HEAD

=======
>>>>>>> 5a1e635d0f939dd65e08687c01f815d05b153e15
  input {
    margin: 3px auto;
    border-radius: 3px;
    border-style: none;
    border-bottom: 1px solid black;
  }
<<<<<<< HEAD

=======
>>>>>>> 5a1e635d0f939dd65e08687c01f815d05b153e15
  button {
    border-radius: 3px;
    margin: 3px auto;
    border-style: none;
    height: 20px;
    width: 100%;
  }
`;
<<<<<<< HEAD
const mapStateToProps = ({ isLoggedIn }) => ({
  isLoggedIn
});

export default connect(
  mapStateToProps,
  { login }
)(LoginPage);
=======

export default LoginPage;
>>>>>>> 5a1e635d0f939dd65e08687c01f815d05b153e15
