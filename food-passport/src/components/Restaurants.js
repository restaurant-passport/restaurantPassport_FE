import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
    return (
      <div>
        <NavLink to='/'>Home</NavLink>
        <h1>YOUR PASSPORTS</h1>
        <ul>
          {this.props.restaurants.map(restaurant => {
            return (
              <Restaurant
                name={restaurant.name}
                id={restaurant.id}
                meal={restaurant.meal}
                review={restaurant.review}
                key={restaurant.id}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

Restaurant.defaultProps = {
 restaurants: [],
};

export default Restaurants;