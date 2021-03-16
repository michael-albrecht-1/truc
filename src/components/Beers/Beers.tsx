import React, { useEffect, useState } from "react";
import beerService from "../../services/beerService";

const initialSelectedBeerId = null;

const Beers = () => {
  const [inputName, setInputName] = useState("");
  const handleNameChange = (e) => {
    setInputName(e.currentTarget.value);
  };

  const [inputStyle, setInputStyle] = useState("");
  const [inputBrewery, setInputBrewery] = useState("");

  const [selectedBeerId, setSelectedBeerId] = useState(initialSelectedBeerId);

  const [filteredBeersList, setFilteredBeersList] = useState([]);

  const resetFormValues = () => {
    setInputName("");
    setInputStyle("");
    setInputBrewery("");

    setSelectedBeerId(initialSelectedBeerId);
    setFilteredBeersList([]);
  };

  useEffect(() => {
    if (selectedBeerId === initialSelectedBeerId) {
      if (!inputName.length) {
        setFilteredBeersList([]);
      } else {
        setFilteredBeersList(
          beerService.findAll().filter((el) => el.name.match(inputName))
        );
      }
    }
  }, [inputName, selectedBeerId]);

  const handleFormSubmit = () => {
    const beer = {
      name: inputName.toLowerCase(),
      style: inputStyle.toLowerCase(),
      brewery: inputBrewery.toLowerCase(),
    };

    if (selectedBeerId === null) {
      beerService.add(beer);
    } else {
      beerService.update(selectedBeerId, beer);
    }

    resetFormValues();
  };

  const handleSelectBeer = (beerId) => {
    let beer = beerService.findById(beerId);

    setSelectedBeerId(beerId);
    setFilteredBeersList([]);

    setInputName(beer.name);
    setInputStyle(beer.style);
    setInputBrewery(beer.brewery);
  };

  return (
    <div className="beerContent">
      <h1>
        <i className="fas fa-beer"></i>Radio bière foot !
      </h1>
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
            {filteredBeersList &&
              filteredBeersList.map((beer) => {
                return (
                  <li
                    className="beerSuggestion"
                    key={beer.id}
                    onClick={() => handleSelectBeer(beer.id)}
                  >
                    <div className="beerNameSugession">
                      <i className="fas fa-beer"></i>
                      {beer.name}
                    </div>
                    <div className="beerBrewerySugession">
                      <i className="fas fa-industry"></i>
                      {beer.brewery}
                    </div>
                  </li>
                );
              })}
          </ul>
          <div className="form-group">
            <label htmlFor="name">Style</label>
            <input
              type="text"
              name="style"
              value={inputStyle}
              onChange={(e) => setInputStyle(e.currentTarget.value)}
              placeholder="ipa, blond, triple.."
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
          <div className="btn btn-submit" onClick={handleFormSubmit}>
            <i className="fas fa-check"></i>
          </div>
          <div className="btn btn-cancel" onClick={resetFormValues}>
            <i className="fas fa-times"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beers;
