import React from "react";
import { Link } from "react-router-dom";
import { StyledList, StyledListItem } from "./Navbar.styled";
import { StyledI } from "../../shared_style/styles"
 
const Navbar = () => {
  return (
    <StyledList>
      <StyledListItem>
        <Link to="/">
          <StyledI className="fas fa-home"></StyledI>Accueil
        </Link>
      </StyledListItem>
      <StyledListItem>
        <Link to="/beers">
          <StyledI className="fas fa-beer"></StyledI>Bières
        </Link>
      </StyledListItem>
    </StyledList>
  );
};

export default Navbar;
