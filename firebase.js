import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB-BYuUKfBWOlMvgrCTPlFo2Qen0aBh33Q",
  authDomain: "ogubereats.firebaseapp.com",
  projectId: "ogubereats",
  storageBucket: "ogubereats.appspot.com",
  messagingSenderId: "104819752322",
  appId: "1:104819752322:web:3bcb72e0a48dca76d2639b"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;



