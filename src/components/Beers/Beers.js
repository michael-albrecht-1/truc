import React from 'react';
import './Beers.css';

import apiService from '../../services/apiService'

const Beers = () => {

    console.log(apiService.findAllBeers());
    return <div className="container">
        <h1>welcome in beers list</h1>

    </div>
}

export default Beers