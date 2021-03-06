import React from 'react';
import './Navbar.css';

import {Link} from "react-router-dom";

const Navbar = () => {
    return <div className="container nav">
        <h1>Le truc que j'préfère !</h1>
        <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/beers">Beers</Link>
            </li>
        </ul>
    </div>
}

export default Navbar