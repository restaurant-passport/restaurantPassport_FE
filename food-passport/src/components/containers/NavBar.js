import React from "react";
import {
  StyledNavBar,
  StyledNavLinks,
  StyledNavLinksContainer
} from "../../styles/StyledNavBar";

function NavBar() {
  return (
    <StyledNavBar>
      <h1>Food Passport</h1>
      <StyledNavLinksContainer>
        <StyledNavLinks to="/">Home</StyledNavLinks>
        <StyledNavLinks to="/passports">Passports</StyledNavLinks>
        <StyledNavLinks to="/loginPage">Login</StyledNavLinks>
      </StyledNavLinksContainer>
    </StyledNavBar>
  );
}

export default NavBar;
