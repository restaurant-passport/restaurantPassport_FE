import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { deletePassport, updatePassport } from "../store/actions/index";
import Restaurant from "./Restaurant";
import styled from "styled-components";

function Passport(props) {
  //   const passport = props.passport.find(
  //     passport => `${passport.id}` === props.match.params.id
  //   );
  //   if (!props.passports.length || !passport) {
  //     return <h2>Looking for Passports</h2>;
  //   }

  // const deleteHandler = event => {
  //   event.preventDefault();
  //   this.props.deletePassport(this.props.match.params.id);
  // };

  //   const populatePassportForm = event => {
  //     event.preventDefault();
  //     props.populatePassportForm(passport);
  //   };

  return (
    <StyledPassportContainer>
      {props.passports.map(passport => {
        console.log(passport);
        return (
          <StyledPassport key={passport.city}>
            <div>
              <h3>{passport.city}</h3>
              {passport.restaurants.map((restaurant, index) => (
                <div key={restaurant.name}>
                  <Restaurant restaurant={restaurant} />
                </div>
              ))}
            </div>

            <input type="text" placeholder="add a restaurant" />
            <div className="passport buttons">
              <button>Update Passport</button>
              <button>Delete Passport</button>
            </div>
          </StyledPassport>
        );
      })}
    </StyledPassportContainer>
  );
}

const StyledPassport = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  width: 40%;
`;

const StyledPassportContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const mapStateToProps = state => {
  return {
    passports: state.passports,
    deletingPassport: state.deletingPassport,
    updatePassports: state.updatePassport
  };
};

export default connect(
  mapStateToProps,
  { deletePassport, updatePassport }
)(Passport);
