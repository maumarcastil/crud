import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8sIaRumtQvDEUexHBxWg_30PV0pXrNfg",
  authDomain: "crud-37fd8.firebaseapp.com",
  projectId: "crud-37fd8",
  storageBucket: "crud-37fd8.appspot.com",
  messagingSenderId: "575006195900",
  appId: "1:575006195900:web:90f8b2ec23a0365b82d0b9",
  measurementId: "G-DTK5V4BZRG",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export { firebase };
