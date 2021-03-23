import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import firebase from "./utils/firebaseConfig";

import Home from "./components/Home/Home";
import Beers from "./components/Beers/Beers";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";



function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setIsSignedIn(Boolean(user));
    });
    return unsubscribe;
  }, []);

  return (
    <>
      {isSignedIn ? (
        <Router>
          <header>
            <Header />
            <Navbar />
          </header>
          <Switch>
            <Route path="/beers">
              <Beers />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
