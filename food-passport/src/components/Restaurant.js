import React from "react";
import styled from "styled-components";

const RestaurantCard = styled.div`
  margin: 0 auto;
  border: 2px outset black;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 20px;
  background-color: #4592af;
  width: 90%;
`;

const RestaurantName = styled.h3`
  color: black;
`;

const Restaurant = props => {
  console.log(props);
  return (
    <div>
      <RestaurantCard>
        <RestaurantName>Restaurant: {props.restaurant.name}</RestaurantName>
        <strong>Meal: {props.restaurant.meal}</strong>
        <p>Comment: {props.restaurant.comment}</p>
      </RestaurantCard>
    </div>
  );
};

Restaurant.defaultProps = {
  name: "",
  comment: "",
  meal: ""
};

export default Restaurant;
