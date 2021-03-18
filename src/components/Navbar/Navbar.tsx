import React, { useState } from "react";
import firebase from "../../utils/firebaseConfig";
import { Link } from "react-router-dom";
import { StyledLogoDiv, StyledLogoImg} from "./Navbar.styles";

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

const Navbar = () => {
  const [areProfileActionsDisplayed, setAreProfileActionsDisplayed] = useState(
    false
  );

  const date = new Date();

  return (
    <header className="navbar">
      <div className="header">
        <StyledLogoDiv>
          <Link to="/">
            <StyledLogoImg className="logo" src="../../images/moon2.svg" alt="logo" />
          </Link>
        </StyledLogoDiv>
        <div className="title">
          <Link to="/">
            <div className="date">{displayedDate(date)}</div>
            <h1>L'truc que J'préfère !</h1>
          </Link>
        </div>
        <ul className="profil">
          {!areProfileActionsDisplayed ? (
            <li onClick={() => setAreProfileActionsDisplayed(true)}>
              <i className="far fa-user"></i>Profil
            </li>
          ) : (
            <>
              <li>
                <Link to="/profile">
                  <i className="fas fa-cog" />Gérer mon profil
                </Link>
              </li>
              <li onClick={() => firebase.auth().signOut()}>
                <i className="fas fa-sign-out-alt" />Se déconnecter
              </li>
              <li onClick={() => setAreProfileActionsDisplayed(false)}>
                <i className="fas fa-times" />Fermer
              </li>
            </>
          )}
        </ul>
      </div>

      <nav className="links">
        <ul>
          <li>
            <Link to="/">
              <i className="fas fa-home"></i>Accueil
            </Link>
          </li>
          <li>
            <Link to="/beers">
              <i className="fas fa-beer"></i>Bières
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
