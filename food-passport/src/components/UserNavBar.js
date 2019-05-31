import React from "react";
import {
  StyledNavBar,
  StyledNavLinks,
  StyledNavLinksContainer
} from "../styles/StyledNavBar";

function UserNavBar() {
  return (
    <StyledNavBar>
      <h1>Food Passport</h1>
      <StyledNavLinksContainer>
        <StyledNavLinks to="/passports">Your Passports</StyledNavLinks>
        <StyledNavLinks to="/form">New Passport</StyledNavLinks>
        <StyledNavLinks to="/">Logout</StyledNavLinks>
      </StyledNavLinksContainer>
    </StyledNavBar>
  );
}

export default UserNavBar;