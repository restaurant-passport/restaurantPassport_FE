import React from "react";
import Passport from "./Passport";

function PassportList(props) {
  console.log(props);
  // function routeToPassport(event, passport) {
  //   event.preventDefault();
  //   props.history.push(`/passports/${passport.id}`);
  // }
  return (
    <div>
      <h1>Passport List</h1>
      <Passport />
      <button>+ New Passport</button>
      {/* {props.PassportList.map(passport => (
        <div key={passport.city}>
          <h1>{passport.city}</h1>
          <ul>
            <li>{passport.city.restaurants}</li>
          </ul>
        </div>
      ))} */}
    </div>
  );
}

export default PassportList;
