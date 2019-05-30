import React from "react";
import Passport from "./Passport";
import { connect } from "react-redux";
import { getPassports } from "../store/actions/index";

class PassportList extends React.Component {
  componentDidMount() {
    this.props.getPassports();
  }
  render() {
    return (
      <div>
        <h1>Passport List</h1>
        <Passport passports={this.props.passports} />
        <button>+ New Passport</button>
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

export default connect(
  mapStateToProps,
  { getPassports }
)(PassportList);
