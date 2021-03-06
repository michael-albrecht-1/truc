import styled from 'styled-components';
import { white } from '../../styles/shared'
import {
  StyledH1,
  StyledI,
  StyledInput,
  StyledLabel,
  StyledForm,
  StyledInputGroup,
  StyledButtonGroup,
} from '../../styles/shared';

export const StyledBeersContent = styled.div`
  display: flex;
  flex-direction: column;
  color: ${white};
`
export const StyledBeerTitle = StyledH1;

export const StyledBeerIcon = StyledI;

export const StyledBeerForm = StyledForm;

export const StyledBeerInputGroup = StyledInputGroup;

export const StyledBeerLabel = StyledLabel;

export const StyledBeerInput = StyledInput;

export const StyledBeerButtonGroup = StyledButtonGroup;

export const StyledBeerSuggestionList = styled.ul`
  margin: 0;
  background-color: #232323;
  opacity: 0.8;
`

export const StyledBeerSuggestionListItem = styled.li`
  display: flex;
  border: none;
  border-bottom: $black solid 2px;
  .beerNameSugession {
    width: 50%;
    padding: 10px 1rem;
    i {
      margin-right: 1rem;
    }
  }
  .beerBrewerySugession {
    width: 50%;
    padding: 10px 1rem;
    border-left: solid 2px $black;
    i {
      margin-right: 1rem;
    }
  }
  :hover {
    color: $color-1;
    box-shadow: 0px 0px 2px 2px $color-3;
    -webkit-box-shadow: 0px 0px 2px 2px $color-3;
    -moz-box-shadow: 0px 0px 2px 2px $color-3;
  }
`
