import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGuJa1cBbjAfKh0xwNH9tMvGOxoWHUIXo",
  authDomain: "kiosk-c8447.firebaseapp.com",
  projectId: "kiosk-c8447",
  storageBucket: "kiosk-c8447.appspot.com",
  messagingSenderId: "247454272482",
  appId: "1:247454272482:web:1e9ab80a7f2bb64e8e87bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

