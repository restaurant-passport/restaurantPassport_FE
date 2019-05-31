import React from "react";
import { connect } from "react-redux";
import {
  deletePassport,
  getPassports,
  addRestaurant
} from "../store/actions/index";
import Restaurant from "./Restaurant";
import styled from "styled-components";

class Passport extends React.Component {
  state = {
    restaurants: this.props.restaurants,
    newRestaurant: {
      cityId: "",
      name: ""
    }
  };

  deleteHandler = (event, id) => {
    // event.preventDefault();
    this.props.deletePassport(id);
  };

  handleChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  // [event.target.name]: event.target.value
  // newRestaurant: {
  //   ...this.state.newRestaurant,
  //   [event.target.name]: event.target.value
  // }

  submitRestaurant = event => {
    event.preventDefault();
    this.props.addRestaurant(this.state.newRestaurant);
  };
  //   const populatePassportForm = event => {
  //     event.preventDefault();
  //     props.populatePassportForm(passport);
  //   };
  render() {
    return (
      <StyledPassportContainer>
        {this.props.passports.map(passport => {
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

              <input
                type="text"
                placeholder="add a restaurant"
                value={this.state.newRestaurant.name}
                name="name"
                onChange={this.handleChanges}
              />
              <div className="passport buttons">
                <i
                  className="far fa-trash-alt"
                  onClick={e => this.deleteHandler(e, passport.id)}
                />
              </div>
            </StyledPassport>
          );
        })}
      </StyledPassportContainer>
    );
  }
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
  { deletePassport, getPassports, addRestaurant }
)(Passport);
