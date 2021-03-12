import React, { useEffect, useState } from 'react';
import firebase from '../../utils/firebaseConfig';
import beerService from '../../services/beerService';


const Beers = () => {

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
        <div className="beerContent">
            <div className="form">
                <div className="inputs">
                    <div className="form-group">
                        <label htmlFor="name">Nom</label>
                        <input 
                            type="text"
                            name="name"
                            id="inputName"
                            value={inputName}
                            onChange={handleNameChange}
                            placeholder="punk"
                            autoComplete="off"
                        />

                    </div>
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
                                        <div id="beerNameSugession">
                                            <i className="fas fa-beer"></i>
                                            {beer.name}
                                        </div>
                                        <div id="beerBrewerySugession">
                                            <i class="fas fa-industry"></i>
                                            {beer.brewery}
                                        </div>                                    
                                    </li>
                                )
                            })  
                        }
                    </ul>
                    <div className="form-group">
                        <label htmlFor="name">Style</label>
                        <input 
                            type="text"
                            name="style"
                            value={inputStyle}
                            onChange={(e) => setInputStyle(e.currentTarget.value)}
                            placeholder="ipa"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="brewery">Brasserie</label>
                        <input 
                            type="text"
                            name="brewery"
                            value={inputBrewery}
                            onChange={(e) => setInputBrewery(e.currentTarget.value)}
                            placeholder="brewdog"
                        />
                    </div>
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
        </div>
)}    

export default Beers

