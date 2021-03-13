import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
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
    );
};

export default Navbar;