import React from 'react';
import styled from 'styled-components'



const RestaurantCard = styled.div`
    margin: 0 auto;
    border: 2px outset black;
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 20px;
    background-color: #4592AF;
    width: 50%;`

const RestaurantName = styled.h3`
    color: black;`


const Restaurant = props => {
  return (
    <div>
    
    <RestaurantCard>
      <RestaurantName>{props.name}</RestaurantName>
      <strong>{props.review}</strong>
      <p>{props.meal}</p>
    </RestaurantCard>
    </div>
  );
};

Restaurant.defaultProps = {
  name: '',
  review: '',
  meal: ''
};

export default Restaurant;

