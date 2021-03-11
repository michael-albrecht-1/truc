import React, { useEffect, useState } from 'react';
import firebase from '../../utils/firebaseConfig';
import TrUpdateDelete from './TrUpdateDelete/TrUpdateDelete';
import Form from './Form/Form';


const Beers = () => {
    const [beerList, setBeerList] = useState([]);

    useEffect( () => {
        const beersDB = firebase.database().ref('beersDB');

        beersDB.on('value', (snapshot) => {
            let previousList = snapshot.val();
            let list = [];
            for (let id in previousList) {
                list.push({id, ...previousList[id]});
            }
            setBeerList(list);
        });
    }, []);

    return (
        <div className="beer">
            <h1>Bières</h1>
            <Form />
        </div>
    )
}

export default Beers

