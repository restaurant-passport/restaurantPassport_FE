import React from "react";
import Passport from "./Passport";
import { connect } from "react-redux";
import { getPassports, addPassport } from "../store/actions/index";
import styled from "styled-components";
class PassportList extends React.Component {
  state = {
    passports: this.props.passports,
    newPassport: {
      city: ""
    }
  };

  componentDidMount() {
    console.log("CDM PL");
    this.props.getPassports();
  }

  handleChanges = event => {
    // event.persist();
    this.setState({
      newPassport: {
        ...this.state.newPassport,
        [event.target.name]: event.target.value
      }
    });
  };

  submitPassport = event => {
    event.preventDefault();
    this.props.addPassport(this.state.newPassport);
  };

  render() {
    return (
      <div>
        <h1>Passport List</h1>
        <Passport passports={this.state.passports} />
        <form onSubmit={this.submitPassport}>
          <input
            type="text"
            name="city"
            value={this.state.newPassport.city}
            placeholder="New city passport"
            onChange={this.handleChanges}
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    passports: state.passports,
    loadingPassports: state.loadingPassports
  };
};

const StyledNewPassButton = styled.button`
  height: 300px;
  width: 200px;
  margin: 20px;
`;

export default connect(
  mapStateToProps,
  { getPassports, addPassport }
)(PassportList);
