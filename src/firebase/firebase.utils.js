import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA7yFN5Y7-mvEBOCzYtOB8dRtmpzekSRXQ",
    authDomain: "crwn-db-45a95.firebaseapp.com",
  databaseURL: "https://crwn-db-45a95.firebaseio.com",
  projectId: "crwn-db-45a95",
  storageBucket: "crwn-db-45a95.appspot.com",
  messagingSenderId: "1062783460374",
  appId: "1:1062783460374:web:49e2812a0fdd6518830137"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;