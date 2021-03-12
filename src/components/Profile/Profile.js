import React from 'react';
import firebase from '../../utils/firebaseConfig';

const profile = () => {
    return (
        <div className="profileContent">
            <h1>
                <i className="fas fa-cog"></i>
                Profile de {firebase.auth().currentUser.displayName}
            </h1>
        </div>
    );
};

export default profile;