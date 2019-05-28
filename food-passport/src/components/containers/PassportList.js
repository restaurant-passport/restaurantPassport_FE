import React from "react";

function PassportList(props) {
  console.log(props);
  return (
    <div>
      <h1>Passport List</h1>
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
