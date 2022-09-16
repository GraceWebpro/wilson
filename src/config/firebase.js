// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6d7odp-YTrOGqk1lUWpbi7B8XqTAYYzQ",
  authDomain: "wilson2-b5b2a.firebaseapp.com",
  projectId: "wilson2-b5b2a",
  storageBucket: "wilson2-b5b2a.appspot.com",
  messagingSenderId: "934924437978",
  appId: "1:934924437978:web:29be7e2612fc5fdacfd8e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage();

export { db, storage }