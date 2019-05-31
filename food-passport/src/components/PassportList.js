import React from "react";
import Passport from "./Passport";
import { connect } from "react-redux";
import { getPassports, addPassport } from "../store/actions/index";
import styled from "styled-components";
class PassportList extends React.Component {
  componentDidMount() {
    this.props.getPassports();
  }

  render() {
    return (
      <div>
        
        <Passport passports={this.props.passports} />
        <StyledNewPassButton>+ New Passport</StyledNewPassButton>
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
