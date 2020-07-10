import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/analytics';

var firebaseConfig = {
    apiKey: "AIzaSyBdNGqUJQ8D9LrTZs53sR7oNUNkLagslW0",
    authDomain: "learn-firebase-846ed.firebaseapp.com",
    databaseURL: "https://learn-firebase-846ed.firebaseio.com",
    projectId: "learn-firebase-846ed",
    storageBucket: "learn-firebase-846ed.appspot.com",
    messagingSenderId: "717476593972",
    appId: "1:717476593972:web:5e206eb66292f198ec6561",
    measurementId: "G-B3HD5XN0CR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();
  // firebase.functions();
  firebase.analytics();

  export default firebase;