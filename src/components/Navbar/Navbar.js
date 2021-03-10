import React, { useState } from 'react';

import firebase from "../../utils/firebaseConfig";

import { Link } from "react-router-dom";

const Navbar = () => {
    const [areProfilActionsDisplayed, setAreProfilActionsDisplayed] = useState(false);
    return (
        <header className="navbar">
            <div className="header">
                <h1>Le truc que j'préfère !</h1>
                <ul className="profil">
                    {
                       (!areProfilActionsDisplayed) && (
                        <li onClick={() => setAreProfilActionsDisplayed(true)}>Profil</li>
                    ) 
                    }
                    { (areProfilActionsDisplayed) && (
                            <>
                                <li onClick={() => firebase.auth().signOut()}>Déconnecter  {firebase.auth().currentUser.displayName}</li>
                                <li onClick={() => setAreProfilActionsDisplayed(false)}>Fermer</li>
                            </>
                        )
                    }
                </ul>
            </div>
            
            <nav className="links">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/beers">Bières</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar