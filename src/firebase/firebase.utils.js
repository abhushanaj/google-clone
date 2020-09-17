import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Firebase Config Object
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "clone-6f246.firebaseapp.com",
  databaseURL: "https://clone-6f246.firebaseio.com",
  projectId: "clone-6f246",
  storageBucket: "clone-6f246.appspot.com",
  messagingSenderId: "997722348987",
  appId: "1:997722348987:web:bbb9922641550381e9b89e",
};

// Initialize the firebase application
firebase.initializeApp(firebaseConfig);

// Global Auth Object
export const auth = firebase.auth();

// Function to sign in with google
export const signInWithGoogle = async () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return auth.signInWithPopup(provider);
};
