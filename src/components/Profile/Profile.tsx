import React from "react";
import firebase from "../../utils/firebaseConfig";
import { StyledProfileContent} from "./Profile.styled"
import { StyledH1, StyledI } from '../../sharedStyle/styles';

const profile = () => {
  const currentUser = firebase.auth().currentUser;

  if(currentUser === null) {
    return <div>Authentication error</div>
  }

  return (
    <StyledProfileContent>
      <StyledH1>
        <StyledI className="fas fa-cog"></StyledI>
        Profile de {currentUser.displayName}
      </StyledH1>
    </StyledProfileContent>
  );
};

export default profile;
