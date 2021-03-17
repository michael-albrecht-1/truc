import * as React from "react";
import firebase from "../../utils/firebaseConfig";

const profile = () => {
  const currentUser = firebase.auth().currentUser;

  if(currentUser === null) {
    return <div>Authentication error</div>
  }

  return (
    <div className="profileContent">
      <h1>
        <i className="fas fa-cog"></i>
        Profile de {currentUser.displayName}
      </h1>
    </div>
  );
};

export default profile;
