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
                <div className="logoDiv">
                    <Link to="/"><img 
                        className="logo"
                        src="../../images/moon2.svg" 
                        alt="logo" 
                    /></Link>
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
                        <li onClick={() => setAreProfilActionsDisplayed(true)}><i className="far fa-user"></i>Profile</li>
                    ) 
                    }
                    { (areProfilActionsDisplayed) && (
                            <>
                                <li>
                                    <Link to="/profile">
                                        <i className="fas fa-cog"></i>Gérer mon profile
                                    </Link>
                                </li>
                                <li onClick={() => firebase.auth().signOut()}>
                                    <i className="fas fa-sign-out-alt"></i>Se déconnecter  
                                </li>
                                <li onClick={() => setAreProfilActionsDisplayed(false)}>
                                    <i className="fas fa-times"></i>Fermer
                                </li>
                            </>
                        )
                    }
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
    )
}

export default Navbar