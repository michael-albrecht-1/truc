import styled from "styled-components";
import { color1, white, black } from "../../shared_style/styles"

export const StyledList = styled.ul`  
  padding: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  list-style-type: none;
  a {
    color: ${white};
    text-decoration: none;
  }

  @media screen and (min-width: 640px) {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    border-top: ${black} 2px solid;
  }
`

export const StyledListItem = styled.li`
  padding: 10px 2rem;
  border-bottom: ${black} 2px solid;
  font-family: $font-4;
  font-weight: 400;
  font-size: 1.2rem;
  text-align: left;
  background-color: transparent;
  cursor: pointer;
  :hover {
    a {
      color: ${color1};
    }
  }

  @media screen and (min-width: 640px) {
    border-top: none;
    border-right: ${black} 2px solid;
    text-align: center;    
  }
`