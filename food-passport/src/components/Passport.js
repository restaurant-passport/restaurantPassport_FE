import React from "react";

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
      <h3>City</h3>
      <ul>
        <li>restaurant</li>
        <li>restaurant</li>
        <li>restaurant</li>
        <li>restaurant</li>
        <li>restaurant</li>
      </ul>
      <div className="passport buttons">
        <button>Update Passport</button>
        <button>Delete Passport</button>
      </div>
    </div>
  );
}

export default Passport;
