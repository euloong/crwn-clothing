import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//uses public API key for Firebase
const config = {
    apiKey: "AIzaSyATBafZzN0cDc37qUdBr-AdGXDnGw1GgRE",
    authDomain: "crwn-db-d7781.firebaseapp.com",
    databaseURL: "https://crwn-db-d7781.firebaseio.com",
    projectId: "crwn-db-d7781",
    storageBucket: "crwn-db-d7781.appspot.com",
    messagingSenderId: "19692759241",
    appId: "1:19692759241:web:8a4c55157f3cd67f894518",
    measurementId: "G-T4NXD2YB2S"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;