import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAd1i5bg3iSvrveDt0B98ajleewQDGmfW0",
  authDomain: "crudfire-1cce8.firebaseapp.com",
  projectId: "crudfire-1cce8",
  storageBucket: "crudfire-1cce8.appspot.com",
  messagingSenderId: "940530543593",
  appId: "1:940530543593:web:c43e4fa8a6c7f79b37f978"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export {firebase};