import firebase from 'firebase/compat';
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyArUlCpoX8PO-hYCFC9Z-xdp-JKRLeNJyE",
  authDomain: "facebook-messenger-clone-e7645.firebaseapp.com",
  projectId: "facebook-messenger-clone-e7645",
  storageBucket: "facebook-messenger-clone-e7645.appspot.com",
  messagingSenderId: "1071254285237",
  appId: "1:1071254285237:web:c6938619b02ddc267007fc"
});

const db = firebaseApp.firestore();

export default db;
