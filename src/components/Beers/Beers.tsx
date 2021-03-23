import React, { useEffect, useState } from "react";
import beerService, { Beer } from "../../services/beerService";

import {
  StyledBeersContent,
  StyledBeerTitle,
  StyledBeerIcon,
  StyledBeerForm,
  StyledBeerInputGroup,
  StyledBeerLabel,
  StyledBeerInput,
  StyledBeerSuggestionList,
  StyledBeerSuggestionListItem,
  StyledBeerButtonGroup,
} from "./Beers.styled"

const initialSelectedBeerId = null;
const initialFilteredBeersList: Beer[] = [];

const Beers = () => {
  const [inputName, setInputName] = useState("");
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputName(e.currentTarget.value);
  };

  const [inputStyle, setInputStyle] = useState("");
  const [inputBrewery, setInputBrewery] = useState("");

  const [selectedBeerId, setSelectedBeerId] = useState<string | null>(initialSelectedBeerId);

  const [filteredBeersList, setFilteredBeersList] = useState(initialFilteredBeersList);

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
      beerService.add(beer.name, beer.style, beer.brewery);
    } else {
      beerService.update(selectedBeerId, beer);
    }

    resetFormValues();
  };

  const handleSelectBeer = (beerId: string) => {
    let beer = beerService.findById(beerId);

    setSelectedBeerId(beerId);
    setFilteredBeersList(initialFilteredBeersList);

    setInputName(beer.name);
    setInputStyle(beer.style);
    setInputBrewery(beer.brewery);
  };

  return (
    <StyledBeersContent>
      <StyledBeerTitle>
        <StyledBeerIcon className="fas fa-beer"></StyledBeerIcon>Radio bière foot !
      </StyledBeerTitle>
      <StyledBeerForm>
        <StyledBeerInputGroup>
          <StyledBeerLabel htmlFor="name">Nom</StyledBeerLabel>
          <StyledBeerInput
            type="text"
            name="name"
            id="inputName"
            value={inputName}
            onChange={handleNameChange}
            placeholder="punk"
            autoComplete="off"
          />
        </StyledBeerInputGroup>
        <StyledBeerSuggestionList>
          {filteredBeersList &&
            filteredBeersList.map((beer) => {
              return (
                <StyledBeerSuggestionListItem
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
                </StyledBeerSuggestionListItem>
              );
            })}
        </StyledBeerSuggestionList>
        <StyledBeerInputGroup>
          <StyledBeerLabel htmlFor="name">Style</StyledBeerLabel>
          <StyledBeerInput
            type="text"
            name="style"
            value={inputStyle}
            onChange={(e) => setInputStyle(e.currentTarget.value)}
            placeholder="ipa, blond, triple.."
          />
        </StyledBeerInputGroup>
        <StyledBeerInputGroup>
          <StyledBeerLabel htmlFor="brewery">Brasserie</StyledBeerLabel>
          <StyledBeerInput
            type="text"
            name="style"
            value={inputBrewery}
            onChange={(e) => setInputBrewery(e.currentTarget.value)}
            placeholder="brewdog"
          />
        </StyledBeerInputGroup>
        <StyledBeerButtonGroup>
          <button onClick={handleFormSubmit}>
            <i className="fas fa-check"></i>
          </button>
          <button onClick={resetFormValues}>
            <i className="fas fa-times"></i>
          </button>
        </StyledBeerButtonGroup>
      </StyledBeerForm>
    </StyledBeersContent>
  );
};

export default Beers;
