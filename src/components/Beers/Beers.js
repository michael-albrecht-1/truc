import React, { useEffect, useState } from 'react';
import firebase from '../../utils/firebaseConfig';
import './Beers.css';
import TrUpdateDelete from './TrUpdateDelete/TrUpdateDelete';


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

    return <div className="container beerListDiv">
        <h1>welcome in beers list</h1>
        <table className="beerList">
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>style</th>
                    <th>brasserie</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {
                beerList && beerList.map( (beer, index) => {
                    return <TrUpdateDelete beer={beer} key={index} />
                }) 
            }
            </tbody>
        </table>
    </div>
}

export default Beers

