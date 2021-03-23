import React, { useState } from "react";
import firebase from "../../utils/firebaseConfig";
import { Link } from "react-router-dom";
import {
  StyledHeaderContainer,
  StyledLogoDiv,
  StyledLogoImg,
  StyledTitleContainer,
  StyledProfilList,
  StyledProfilListItem,
  StyledProfilListItemIcon,
} from "./Header.styled";

const months = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Aout",
  "Septembre",
  "Octobre",
  "Novembre",
  "Decembre",
];

const displayedDate = (date: Date) =>
  `Le ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;

const Header = () => {
  const [areProfileActionsDisplayed, setAreProfileActionsDisplayed] = useState(
    false
  );

  const date = new Date();

  return (
    <StyledHeaderContainer>
      <StyledLogoDiv>
        <Link to="/">
          <StyledLogoImg className="logo" src="../../images/moon2.svg" alt="logo" />
        </Link>
      </StyledLogoDiv>
      <StyledTitleContainer>
        <Link to="/">
          <div className="date">{displayedDate(date)}</div>
          <h1>L'truc que J'préfère !</h1>
        </Link>
      </StyledTitleContainer>
      <StyledProfilList>
        {!areProfileActionsDisplayed ? (
          <StyledProfilListItem onClick={() => setAreProfileActionsDisplayed(true)}>
            <StyledProfilListItemIcon className="far fa-user"></StyledProfilListItemIcon>Profil
          </StyledProfilListItem>
        ) : (
          <>
            <StyledProfilListItem>
              <Link to="/profile">
                <StyledProfilListItemIcon className="fas fa-cog" />Gérer mon profil
            </Link>
            </StyledProfilListItem>
            <StyledProfilListItem onClick={() => firebase.auth().signOut()}>
              <StyledProfilListItemIcon className="fas fa-sign-out-alt" />Se déconnecter
            </StyledProfilListItem>
            <StyledProfilListItem onClick={() => setAreProfileActionsDisplayed(false)}>
              <StyledProfilListItemIcon className="fas fa-times" />Fermer
            </StyledProfilListItem>
          </>
        )}
      </StyledProfilList>
    </StyledHeaderContainer>
  );
};

export default Header;
