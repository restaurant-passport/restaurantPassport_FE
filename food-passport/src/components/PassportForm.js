<<<<<<< HEAD
import React from "react";

function PassportForm() {
  return <h1>passport form</h1>;
}

export default PassportForm;
=======
import React, { Component } from 'react';
import styled from 'styled-components';


const FormDiv = styled.div`
    width: 40%;
    margin: 0 auto;
    backgorund-color: #E3C4A8`
    
const Form = styled.form`
    display:flex;
    flex-direction: column;`

class PassportForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantName: '',
      entree: '',
      notes: ''
    };
  }

  addNewPassport = event => {
    event.preventDefault();

    this.setState({
        restaurantName: '',
        entree: '',
        notes: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <FormDiv>
        <Form onSubmit={this.addNewPassport}>
          <input
            onChange={this.handleInputChange}
            placeholder="Enter the name of restaurant here"
            value={this.state.restaurantName}
            name="restaurantName"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="Enter meal details here"
            value={this.state.entree}
            name="entree"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="Add any notes about this restaurant"
            value={this.state.notes}
            name="notes"
          />
          <button type="submit">Add to my Passport</button>
        </Form>
      </FormDiv>
    );
  }
}

export default PassportForm;


>>>>>>> 5a1e635d0f939dd65e08687c01f815d05b153e15
