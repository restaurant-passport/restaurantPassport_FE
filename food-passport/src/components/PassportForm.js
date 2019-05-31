import React from "react";
import UserNavBar from "./UserNavBar";

function PassportForm() {
  return (
    <div>
      <UserNavBar />
      <h1>passport form</h1>
      {/* <form onSubmit={this.submitPassport}>
        <input
          type="text"
          name="city"
          value={this.state.newPassport.city}
          placeholder="New city passport"
          onChange={this.handleChanges}
        />
      </form> */}
    </div>
  );
}

export default PassportForm;
