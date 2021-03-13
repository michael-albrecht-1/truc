import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import firebase from '../../utils/firebaseConfig';

const initialDisplayedProfileActionsList = [];

const UserLinks = () => {

  const [areProfileActionsDisplayed, setAreProfileActionsDisplayed] = useState(
    false
  );
  const handleCloseProfileLinks = () => {
    setAreProfileActionsDisplayed(false);
    setDisplayedProfileActionsList(initialDisplayedProfileActionsList);
  }

  const [displayedProfileActionsList, setDisplayedProfileActionsList] = useState(initialDisplayedProfileActionsList);

  const initialProfileActionsList = [
    (
      <li>
        <Link to="/profile">
          <i className="fas fa-cog" />Gérer mon profil
        </Link>
      </li>
    ),
    (
      <li onClick={() => firebase.auth().signOut()}>
        <i className="fas fa-sign-out-alt" />Se déconnecter
      </li>
    ),
    (
      <li onClick={handleCloseProfileLinks}>
        <i className="fas fa-times" />Fermer
      </li>
    )
  ];

  useEffect(() => {
    if (areProfileActionsDisplayed) {
      const interval = setInterval(() => {
        if (displayedProfileActionsList.length <= initialProfileActionsList.length){
          setDisplayedProfileActionsList(displayedProfileActionsList => [...displayedProfileActionsList, initialProfileActionsList[displayedProfileActionsList.length]]);
        }
     }, 200);
       return () => clearInterval(interval);
    }
  }, [areProfileActionsDisplayed, displayedProfileActionsList])


  return (
      <ul className="profil">
        {!areProfileActionsDisplayed ? (
          <li onClick={() => setAreProfileActionsDisplayed(true)}>
            <i className="far fa-user"></i>Profil
          </li>
        ) :
        displayedProfileActionsList
        }
    </ul>
  );
};

export default UserLinks;