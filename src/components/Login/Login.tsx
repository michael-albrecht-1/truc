import React from 'react';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "../../utils/firebaseConfig";
import { StyledLoginContent, StyledLoginTitle } from "./Login.styled"

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
      <StyledLoginTitle>Le truc que j'préfère / Connexion</StyledLoginTitle>
      <StyledFirebaseAuth
        uiConfig={uiConfig}
        firebaseAuth={firebase.auth()}
      />
    </StyledLoginContent>
  );
};

export default Login;
