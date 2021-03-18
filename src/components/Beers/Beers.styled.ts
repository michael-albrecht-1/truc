import styled from 'styled-components';
import { white } from '../../sharedStyle/styles' 
import { StyledH1, StyledI } from '../../sharedStyle/styles';

export const StyledBeersContent = styled.div`
flex-direction: column;
color: ${white};
`
export const StyledTitle = styled(StyledH1)``;

export const StyledIcon = styled(StyledI)``;



/*! OLD CSS

.beerContent {
  display: flex;
  flex-direction: column;

  h1 {
    i {
      margin-right: 1rem;
    }
  }

  .form {
    font-family: $font-4;
    font-size: 1.2rem;
    margin-top: 4rem;

    .inputs {
      display: flex;
      flex-direction: column;
      border-top: $black solid 2px;
      text-align: left;
      .form-group {
        border-bottom: $black solid 2px;
        display: flex;
        flex-wrap: wrap;

        label {
          border-bottom: $black dotted 2px;
          padding: 10px 2rem;
          width: 100%;
        }
        input {
          border: none;
          background-color: transparent;
          width: 100%;
          color: $color-3;
          padding: 10px 2rem;
          font-size: 1.2rem;
        }
        input::placeholder {
          color: rgb(145, 142, 142);
        }
        input:focus {
          z-index: 10;
          outline: none;
          border: solid 2px $color-1;
          background-color: $black;
          opacity: 0.6;
          box-shadow: 0px 0px 2px 2px $color-3;
          -webkit-box-shadow: 0px 0px 2px 2px $color-3;
          -moz-box-shadow: 0px 0px 2px 2px $color-3;
        }
        input:hover {
          color: $color-1;
          box-shadow: 0px 0px 2px 2px $color-3;
          -webkit-box-shadow: 0px 0px 2px 2px $color-3;
          -moz-box-shadow: 0px 0px 2px 2px $color-3;
        }
      }

      .beerSuggestionList {
        background-color: #232323;
        opacity: 0.8;
        .beerSuggestion {
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
        }
        .beerSuggestion:hover {
          color: $color-1;
          box-shadow: 0px 0px 2px 2px $color-3;
          -webkit-box-shadow: 0px 0px 2px 2px $color-3;
          -moz-box-shadow: 0px 0px 2px 2px $color-3;
        }
      }
    }
    .btn-group {
      display: flex;
      flex-wrap: wrap;
      border-bottom: solid 2px $black;
      .btn {
        width: 3rem;
        border: none;
        padding: 10px;
        cursor: pointer;
        border-right: solid 2px $black;
      }
      .btn:hover {
        border: 2px solid $color-1;
        color: $color-1;
        box-shadow: 0px 0px 2px 2px $color-3;
        -webkit-box-shadow: 0px 0px 2px 2px $color-3;
        -moz-box-shadow: 0px 0px 2px 2px $color-3;
      }
    }
  }
}


*/