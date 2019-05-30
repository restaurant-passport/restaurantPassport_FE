import React from "react";
import Restaurant from "./Restaurant";
import {connect} from 'react-redux';
import {deletePassport, updatePassport}from "../store/actions/index" ;

function Passport(props) {
  //   const passport = props.passport.find(
  //     passport => `${passport.id}` === props.match.params.id
  //   );
  //   if (!props.passports.length || !passport) {
  //     return <h2>Looking for Passports</h2>;
  //   }

  //   const deleteHandler = event => {
  //     event.preventDefault();
  //     props.deletePassport(props.match.params.id);
  //   };

  //   const populatePassportForm = event => {
  //     event.preventDefault();
  //     props.populatePassportForm(passport);
  //   };

  return (
    <div>
      {props.passports.map(passport => (
        <div key={passport.id}>
          <h3>{passport.city}</h3>

          {passport.restaurants.map((restaurant, index) => (
            <ul>
              <li key={restaurant.name}>
                <Restaurant restaurant={restaurant} />
              </li>
            </ul>
          ))}
          <input type="text" placeholder="add a restaurant" />
          <div className="passport buttons">
            <button onClick={e => props.updatePassport(e, passport.id)}>Update Passport</button>
            <button onClick={e => props.deletePassport(e, passport.id)}>Delete Passport</button>
          </div>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    passports: state.passports,
    deletingPassport: state.deletingPassport,
    updatePassports: state.updatePassport
  }
};

// const mapActionToProps = state => {
//   return {
//     passports: state.passports,
    
//   }
// }



export default connect(mapStateToProps,{deletePassport, updatePassport}) (Passport);
