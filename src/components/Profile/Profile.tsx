import React from "react";
import firebase from "../../utils/firebaseConfig";
import { StyledProfileContent, StyledTitle, StyledIcon} from "./Profile.styled"

const profile = () => {
  const currentUser = firebase.auth().currentUser;

  if(currentUser === null) {
    return <div>Authentication error</div>
  }

  return (
    <StyledProfileContent>
      <StyledTitle>
        <StyledIcon className="fas fa-cog"></StyledIcon>
        Profile de {currentUser.displayName}
      </StyledTitle>
    </StyledProfileContent>
  );
};

export default profile;
