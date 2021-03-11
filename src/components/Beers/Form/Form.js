import React, {useEffect, useState} from 'react';
import firebase from '../../../utils/firebaseConfig';

const Form = () => {
    const [inputName, setInputName] = useState('');
    const [inputStyle, setInputStyle] = useState('');
    const [inputBrewery, setInputBrewery] = useState('');

    const [beerList, setBeerList] = useState([]);

    const createBeer = () => {
        const beersDB = firebase.database().ref("beersDB");
        const beer = {
            name: inputName.toLowerCase(),
            style: inputStyle.toLowerCase(),
            brewery: inputBrewery.toLowerCase()
        };

        beersDB.push(beer);

        setInputName('');
        setInputStyle('');
        setInputBrewery('');
    }

    useEffect( () => {
        const beersDB = firebase.database().ref('beersDB');

        beersDB.on('value', (snapshot) => {
            const inputNameValue =  document.querySelector('#inputName').value.toLowerCase();
            let previousList = snapshot.val();
            let list = [];
            if (inputNameValue !== ""){
                for (let id in previousList) {
                    let findName = previousList[id].name.search(inputNameValue);
                    if (findName === 0){
                        list.push({id, ...previousList[id]});
                    }
                }
            }
            setBeerList(list);
        });
    }, [inputName]);
    

    const handleNameChange = (e) => {
        return setInputName(e.currentTarget.value);
    }

    return (
        <div className="form">
            <div className="inputs">
                <input 
                    type="text"
                    id="inputName"
                    value={inputName}
                    onChange={handleNameChange}
                    placeholder="nom de la binouze"
                    autocomplete="off"
                />
                <ul className="beerSuggestionList">
                    {
                        beerList && beerList.map( (beer, index) => {
                            return (
                                <li 
                                    className="beerSuggestion" 
                                    key={index}>
                                        {beer.name}
                                </li>
                            )
                        })  
                    }
                </ul>
                <input 
                    type="text"
                    value={inputStyle}
                    onChange={(e) => setInputStyle(e.currentTarget.value)}
                    placeholder="style de la binouze"
                />
                <input 
                    type="text"
                    value={inputBrewery}
                    onChange={(e) => setInputBrewery(e.currentTarget.value)}
                    placeholder="brasserie de la binouze"
                />
            </div>
            <div className="btn" onClick={createBeer}>
                Valider
            </div>        
        </div>
    )}

export default Form