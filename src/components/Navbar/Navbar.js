import React, { useState } from 'react';
import firebase from "../../utils/firebaseConfig";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [areProfilActionsDisplayed, setAreProfilActionsDisplayed] = useState(false);

    const date = new Date();
    const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"];

    return (
        <header className="navbar">
            <div className="header">
                <div className="logo">
                    <Link to="/"><img src="../../images/moon2.svg" alt="logo" /></Link>
                </div>
                <div className="title">
                    <Link to="/">
                        <div className="date">
                            {
                                'Le '
                                +date.getDate() 
                                + ' ' 
                                + months[date.getMonth()] 
                                + ' ' +date.getFullYear()
                            }
                        </div>
                        <h1>L'truc que J'préfère !</h1>
                    </Link>
                </div>
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