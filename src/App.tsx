import * as React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import firebase from "./utils/firebaseConfig";

import Home from "./components/Home/Home";
import Beers from "./components/Beers/Beers";
import Profile from "./components/Profile/Profile";
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
    <div className="App">
      {isSignedIn ? (
        <Router>
          <Navbar />
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
    </div>
  );
}

export default App;
