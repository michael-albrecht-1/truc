import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBUi1WODzR5pe1szgwT3r8Q7qWiPa9eKcg",
    authDomain: "katatak-374aa.firebaseapp.com",
    
    // projectId: "katatak-374aa",
    // storageBucket: "katatak-374aa.appspot.com",
    // messagingSenderId: "804376054896",
    // appId: "1:804376054896:web:0581e6e340ca1f4ad338b5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase