import React from "react";

function LandingPage() {
  return (
    <div>
      <h1>Welcome to Food Passport!</h1>
      <p>Login to get start collecting your restaurant stamps!</p>
      <p>How many passports can you fill?</p>
      <form>
        <h2>Register a new account</h2>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <input type="text" placeholder="email" />
        <button>Submit</button>
      </form>
      <button>Login</button>
    </div>
  );
}

export default LandingPage;
