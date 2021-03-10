import React from 'react';

import firebase from "../../utils/firebaseConfig";

import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar container">
            <h1>Le truc que j'préfère !</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/beers">Bières</Link>
                </li>
                <li>
                    <div
                        className="logout"
                        onClick={() => firebase.auth().signOut()}
                    >Déconnecter  {firebase.auth().currentUser.displayName}</div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar