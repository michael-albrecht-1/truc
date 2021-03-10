import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "./utils/firebaseConfig";

import Home from './components/Home/Home';
import Beers from './components/Beers/Beers';
import Navbar from './components/Navbar/Navbar';

function App() {
    const [isSignedIn, setIsSignedIn] = useState(false);

    const uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ],
        callbacks: {
            // signInSuccess: () => false,
            signInSuccessWithAuthResult: () => false,
        },
    };

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            // !! dubble ! transform in boolean
            setIsSignedIn(!!user);
        });
    }, []);

    return (
        <div className="App">
            { isSignedIn ? (
                <Router>
                    <Navbar />
                    <Switch>
                        <Route path="/beers">
                            <Beers />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            ) : (
                <div className="container">
                    <h1>Connexion</h1>
                    <StyledFirebaseAuth
                        uiConfig={uiConfig}
                        firebaseAuth={firebase.auth()}
                    />
                </div>
            )}
        </div>
    );
}

export default App;
