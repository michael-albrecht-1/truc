import React from 'react';
import firebase from '../../utils/firebaseConfig';

const profile = () => {
    return (
        <h1>Profile de {firebase.auth().currentUser.displayName}</h1>
    );
};

export default profile;