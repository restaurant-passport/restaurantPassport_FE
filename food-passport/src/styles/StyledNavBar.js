import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #33313b;

  h1 {
    justify-content: flex-start;
    margin: 20px;
    color: #4592af;
  }

  h3 {
    justify-content: flex-end;
    margin: 10px;
    color: #e3c4a8;
  }
`;

export const StyledNavLinksContainer = styled.div``;

export const StyledNavLinks = styled(Link)`
  text-decoration: none;
  color: #e3c4a8;
  justify-content: flex-end;
  margin: 20px;
`;
