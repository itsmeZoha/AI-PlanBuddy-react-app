// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOG7krZiVV2ZUH0sDKwsPmTyzwS4XnHyU",
  authDomain: "planbuddy-6f58a.firebaseapp.com",
  projectId: "planbuddy-6f58a",
  storageBucket: "planbuddy-6f58a.firebasestorage.app",
  messagingSenderId: "616333772590",
  appId: "1:616333772590:web:69be33bd0ab496d2741cbf",
  measurementId: "G-XJ8D04KCPY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);