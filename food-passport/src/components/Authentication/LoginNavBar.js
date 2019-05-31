import React from "react";
import {
  StyledNavBar,
  StyledNavLinks,
  StyledNavLinksContainer
} from "../../styles/StyledNavBar";

function LoginNavBar() {
  return (
    <StyledNavBar>
      <h1>Food Passport</h1>
      <StyledNavLinksContainer>
        <StyledNavLinks to="/">Home</StyledNavLinks>
      </StyledNavLinksContainer>
    </StyledNavBar>
  );
}

export default LoginNavBar;
