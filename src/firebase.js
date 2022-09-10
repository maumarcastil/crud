import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAJOhwmkPFchYzhWZyNgY4OCnj9KQqnd7o",
  authDomain: "crud-60a70.firebaseapp.com",
  projectId: "crud-60a70",
  storageBucket: "crud-60a70.appspot.com",
  messagingSenderId: "622622364226",
  appId: "1:622622364226:web:c571c3a84a975f5c0213db",
  measurementId: "G-6WS6EW85K5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export {firebase};