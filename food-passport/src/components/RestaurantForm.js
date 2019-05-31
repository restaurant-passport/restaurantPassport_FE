import React, { Component } from 'react';
import axios from "axios";
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import UserNavBar from './UserNavBar';


const NewRestaurantForm = styled.div`
   color: green;`


class RestaurantForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      meal: '',
      review: ''
    };
  }

  addRestaurant = ev => {
    ev.preventDefault();
    
    let newRestaurant = {
      name: this.state.name,
      meal: this.state.meal,
      review: this.state.review,
    }
    
    axios
    .post("https://foodpassword-bw.herokuapp.com", newRestaurant)
    .then(res => {
      this.props.addRestaurants(res.data)
      this.props.history.push('/'); 
    })
    .catch(error => console.log(error));
    this.setState({
      name: '',
      meal: '',
      review: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <UserNavBar/>
      <NewRestaurantForm>
        <h1>NEW PASSPORT</h1>
        <form onSubmit={this.addRestaurant}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
            required
          />
          <input
            onChange={this.handleInputChange}
            placeholder="meal"
            value={this.state.meal}
            name="meal"
            required
          />
          <input
            onChange={this.handleInputChange}
            placeholder="review"
            value={this.state.review}
            name="review"
            required
          />
          <button onClick={this.addRestaurant} type="submit">Add to the Passport</button>
        </form>
      </NewRestaurantForm>
      </div>
    );
  }
}

export default RestaurantForm;
