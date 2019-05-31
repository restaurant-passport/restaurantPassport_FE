import React from "react";
import { connect } from "react-redux";
import { addRestaurant } from "../store/actions/index";
import UserNavBar from "./UserNavBar";

class RestaurantForm extends React.Component {
  state = {
    newRestaurant: {
      cityId: "",
      name: "",
      meal: "",
      comment: ""
    }
  };

  handleChanges = event => {
    this.setState({
      newRestaurant: {
        ...this.state.newRestaurant,
        [event.target.name]: event.target.value
      }
    });
  };

  submitRestaurant = event => {
    event.preventDefault();
    this.props.addRestaurant(this.state.newRestaurant);
  };

  render() {
    return (
      <div>
        <UserNavBar />
        <form onSubmit={this.submitRestaurant}>
          <input
            type="text"
            placeholder="add a restaurant"
            value={this.state.newRestaurant.name}
            name="name"
            onChange={this.handleChanges}
          />
          <input
            type="text"
            placeholder="meal?"
            value={this.state.newRestaurant.meal}
            name="name"
            onChange={this.handleChanges}
          />
          <input
            type="text"
            placeholder="comment?"
            value={this.state.newRestaurant.comment}
            name="name"
            onChange={this.handleChanges}
          />
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addRestaurant }
)(RestaurantForm);
