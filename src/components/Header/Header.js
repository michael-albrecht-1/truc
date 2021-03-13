import React from "react";
import { Link } from "react-router-dom";
import UserLinks from "../UserLinks/UserLinks";

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

const displayedDate = (date) =>
  `Le ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;

const Header = () => {
  const date = new Date();

    return (
        <div className="header">
        <div className="logoDiv">
          <Link to="/">
            <img className="logo" src="../../images/moon2.svg" alt="logo" />
          </Link>
        </div>
        <div className="title">
          <Link to="/">
            <div className="date">{displayedDate(date)}</div>
            <h1>L'truc que J'préfère !</h1>
          </Link>
        </div>
        <UserLinks />
      </div>
    );
};

export default Header;