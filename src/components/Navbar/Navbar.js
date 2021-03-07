import React from 'react';
import './Navbar.css';

import firebase from "../../utils/firebaseConfig";

import {Link} from "react-router-dom";

const Navbar = () => {
    return <nav className="container nav">
        <h1>Le truc que j'préfère !</h1>
        <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/beers">Beers</Link>
            </li>
            <li>
              <div 
                className="logout"
                onClick={() => firebase.auth().signOut()}  
              >Déconnecter  {firebase.auth().currentUser.displayName}</div>  
            </li>
        </ul>
    </nav>
}

export default Navbar