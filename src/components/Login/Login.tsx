import React from 'react';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "../../utils/firebaseConfig";
import { StyledLoginContent, StyledTitle } from "./Login.styled"

const uiConfig = {
  signInFlow: "popup",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
};

const Login = () => {
  return (
    <StyledLoginContent>
      <StyledTitle>Le truc que j'préfère / Connexion</StyledTitle>
      <StyledFirebaseAuth
        uiConfig={uiConfig}
        firebaseAuth={firebase.auth()}
      />
    </StyledLoginContent>
  );
};

export default Login;
