import React, {useEffect, useState} from 'react';
import firebase from '../../../utils/firebaseConfig';
import beerService from '../../../services/beerService';

const Form = () => {
    const [inputName, setInputName] = useState('');
    const [inputStyle, setInputStyle] = useState('');
    const [inputBrewery, setInputBrewery] = useState('');

    const [selectedBeer, setSelectedBeer] = useState([]);
    const [selectedBeerId, setSelectedBeerId] = useState(null);

    const [filteredBeersList, setFilteredBeersList] = useState([]);

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
            if (selectedBeerId === null ) {
                const inputNameValue =  document.querySelector('#inputName').value.toLowerCase();
                let previousList = beerService.findAll();
                let list = [];
                if (inputNameValue !== ""){
                    for (let id in previousList) {
                        let findName = previousList[id].name.search(inputNameValue);
                        if (findName === 0){
                            list.push({id, ...previousList[id]});
                        }
                    }
                }
                setFilteredBeersList(list);
            }
    }, [inputName]);
    

    const handleNameChange = (e) => {
        return setInputName(e.currentTarget.value);
    }

    const handleSelectBeer = (e) => {
        let beer = beerService.findById(e.currentTarget.id);
        setSelectedBeer(beer)
        setSelectedBeerId(e.currentTarget.id)
        setFilteredBeersList([])

        setInputName(beer.name);
        setInputStyle(beer.style);
        setInputBrewery(beer.brewery);     
    }

    const resetform = () => {
        setInputName('');
        setInputStyle('');
        setInputBrewery('');

        setSelectedBeer('');
        setSelectedBeerId(null);
        setFilteredBeersList([]);
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
                    autoComplete="off"
                />
                <ul className="beerSuggestionList">
                    {
                        filteredBeersList && filteredBeersList.map( (beer, index) => {
                            return (
                                <li 
                                    className="beerSuggestion" 
                                    key={index}
                                    id={beer.id}
                                    onClick={handleSelectBeer}
                                >
                                    <div id="beerNameSugession">{beer.name}</div>
                                    <div id="beerBrewerySugession">{beer.brewery}</div>                                    
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
            <div className="btn-group">
                <div className="btn btn-submit" onClick={createBeer}>
                    Valider
                </div>  
                <div className="btn btn-cancel" onClick={resetform}>
                    Annuler
                </div>      
            </div>
        </div>
    )}

export default Form