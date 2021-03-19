import styled from "styled-components";

export const font1 = "'Nova Round', cursive";
export const font2 = "'Dosis', sans-serif";
export const font3 = "'Josefin Sans', serif";
export const font4 = "'Roboto', sans-serif";

export const color1= "#ecc163";
export const color2= "#ebb33c";
export const color3= "#e6a00b";
export const color4= "#d49409";
export const color5= "#36d0ea";
export const white= "#ddd";
export const black= "#211e1e";

export const StyledI = styled.i`
  margin-right: 1rem;
`

export const StyledH1 = styled.h1`
  margin: 2rem 0;
  font-family: ${font4};
  text-align: center;
`
export const StyledA = styled.a`
  text-decoration: none;
  color: ${white};
  cursor: pointer;
  :visited {
    color: ${white};
  }
  `
export const StyledForm = styled.form`
  font-family: $font-4;
  font-size: 1.2rem;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  border-top: ${black} solid 2px;
  text-align: left;
  `

export const StyledInputGroup = styled.div`
  border-bottom: ${black} solid 2px;
  display: flex;
  flex-wrap: wrap;
`

export const StyledButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-bottom: solid 2px ${black};
  button {
    background-color: transparent;
    width: 3rem;
    border: none;
    padding: 10px;
    cursor: pointer;
    border-right: solid 2px ${black};
    :hover {
      border: 2px solid ${color1};
      color: ${color1};
      box-shadow: 0px 0px 2px 2px ${color3};
      -webkit-box-shadow: 0px 0px 2px 2px ${color3};
      -moz-box-shadow: 0px 0px 2px 2px ${color3};
    }
  }
`

export const StyledLabel = styled.label`
  border-bottom: ${black} dotted 2px;
  padding: 10px 2rem;
  width: 100%;
`

export const StyledInput = styled.input`
  border: none;
  background-color: transparent;
  width: 100%;
  color: ${color3};
  padding: 10px 2rem;
  font-size: 1.2rem;
  
  ::placeholder {
    color: rgb(145, 142, 142);
  }
  :focus {
    z-index: 10;
    outline: none;
    border: solid 2px ${color1};
    background-color: ${black};
    opacity: 0.6;
    box-shadow: 0px 0px 2px 2px ${color3};
    -webkit-box-shadow: 0px 0px 2px 2px ${color3};
    -moz-box-shadow: 0px 0px 2px 2px ${color3};
  }
  :hover {
    color: ${color1};
    box-shadow: 0px 0px 2px 2px ${color3};
    -webkit-box-shadow: 0px 0px 2px 2px ${color3};
    -moz-box-shadow: 0px 0px 2px 2px ${color3};
  }
`
