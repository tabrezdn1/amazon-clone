import firebase from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjKUYUtjIykKGm3tVpJs_gj0gCVwe6TKY",
  authDomain: "clone-da269.firebaseapp.com",
  databaseURL: "https://clone-da269.firebaseio.com",
  projectId: "clone-da269",
  storageBucket: "clone-da269.appspot.com",
  messagingSenderId: "786349042404",
  appId: "1:786349042404:web:e3e8473df7cd83080c9af1",
  measurementId: "G-2MZK41DS8Q"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebaseApp.auth();

export { db, auth };