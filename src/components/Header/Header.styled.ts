import styled from "styled-components";
import { black, white, color1, font4, StyledI} from "../../sharedStyle/styles"

export const StyledHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 640px) {
    flex-direction: row;
    flex-wrap: nowrap;
  }
`

export const StyledLogoDiv = styled.div`
  border-bottom: ${black} 2px solid;
  padding: 2rem;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 640px) {
    border-bottom: none;
    border-right: ${black} 2px solid;
  }
`

export const StyledLogoImg = styled.img`
  min-width: 150px;
  max-width: 200px;
  transform: rotate(5deg);
  :hover {
    transform: rotate(7deg);
  }

`

export const StyledTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .date {
    margin-top: 1rem;
    text-align: center;
  }
  a {
    color: ${black};
    text-decoration: none;
    cursor: pointer;
    :visited {
      color: ${black};
    }
  }
  h1 {
    margin: 1rem 2rem;
    text-align: center;
    font-size: 3rem;
    font-family: ${font4};
    text-align: center;
  }
  :hover {
    a {
      color: ${color1};
    }
  }
  @media screen and (min-width: 640px) {
    .date {
      margin-top: 0;
    }
  }
`
export const StyledProfilList = styled.ul`
  border-top: ${black} 2px solid;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 640px) {
    border-top: none;
    border-left: ${black} 2px solid;
    width: 20%;
  }
`

export const StyledProfilListItem = styled.li`
  list-style-type: none;
  width: 100%;
  border-bottom: ${black} 2px solid;
  padding: 10px 2rem;
  font-family: $font-4;
  font-weight: 400;
  font-size: 1.2rem;
  text-align: left;
  cursor: pointer;
  color: ${white};
  text-decoration: none;
  cursor: pointer;
  a {
    text-decoration: none;
    :visited {
      color: ${white};
  }
  :hover, a:hover {
  color: ${color1};
  }
  @media screen and (min-width: 640px) {
    padding: 10px 0.4rem;
  }
`

export const StyledProfilListItemIcon = styled(StyledI)`
display:inline-block;
font-size: 20px;
line-height: 20px;
color:white;
width: 20px;
height: 20px;
text-align: center;
vertical-align: bottom;
`
