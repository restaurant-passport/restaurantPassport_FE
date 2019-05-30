import React from "react";
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
  };

  render() {
    return (
      <LoginPageStyled>
        {/* <i class="" /> some kind of food icon  */}
        <h1>
          Login to see your <span>Food Passports</span>!
        </h1>
        <FormStyled onSubmit={this.handleLogin}>
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
          <button onClick={this.handleLogin}>Log In</button>
        </FormStyled>
      </LoginPageStyled>
    );
  }
}

const LoginPageStyled = styled.div`
  // border: 1px solid black;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .fa-instagram {
    font-size: 5rem;
  }
`;

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    margin: 3px auto;
    border-radius: 3px;
    border-style: none;
    border-bottom: 1px solid black;
  }

  button {
    border-radius: 3px;
    margin: 3px auto;
    border-style: none;
    height: 20px;
    width: 100%;
  }
`;
const mapStateToProps = ({ isLoggedIn }) => ({
  isLoggedIn
});

export default connect(
  mapStateToProps,
  { login }
)(LoginPage);
