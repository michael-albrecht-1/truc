import React, {useState} from 'react';

import firebase from '../../../utils/firebaseConfig';

import './Form.css';

const Form = () => {
    const [name, setName] = useState('');
    const [style, setStyle] = useState('');
    const [brewery, setBrewery] = useState('');

    const createBeer = () => {
        const beersDB = firebase.database().ref("beersDB");
        const beer = {
            name,
            style,
            brewery
        };

        beersDB.push(beer);

        setName('');
        setStyle('');
        setBrewery('');
    }

    return (
        <div className="form-create">
            <input 
                type="text"
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
                placeholder="nom de la binouze"
            />
            <input 
                type="text"
                value={style}
                onChange={(e) => setStyle(e.currentTarget.value)}
                placeholder="style de la binouze"
            />
            <input 
                type="text"
                value={brewery}
                onChange={(e) => setBrewery(e.currentTarget.value)}
                placeholder="brasserie de la binouze"
            />
            <button onClick={createBeer}>Valider</button>
        </div>
    )}

export default Form