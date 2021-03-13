import React, { useState } from 'react';
import { Link } from "react-router-dom";
import firebase from '../../utils/firebaseConfig';

const UserLinks = () => {
    const [areProfileActionsDisplayed, setAreProfileActionsDisplayed] = useState(
      false
    );
  
    return (
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
    );
};

export default UserLinks;