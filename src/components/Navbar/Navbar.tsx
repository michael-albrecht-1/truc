import React from "react";
import { Link } from "react-router-dom";
import { StyledList, StyledListItem, StyledListItemIcon } from "./Navbar.styled";
 
const Navbar = () => {
  return (
    <StyledList>
      <StyledListItem>
        <Link to="/">
          <StyledListItemIcon className="fas fa-home"></StyledListItemIcon>Accueil
        </Link>
      </StyledListItem>
      <StyledListItem>
        <Link to="/beers">
          <StyledListItemIcon className="fas fa-beer"></StyledListItemIcon>Bières
        </Link>
      </StyledListItem>
    </StyledList>
  );
};

export default Navbar;
