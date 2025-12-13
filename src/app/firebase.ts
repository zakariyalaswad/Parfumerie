// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcBCXO1m3CYRondrp4ELXyYQ4ZtOU9AJk",
  authDomain: "parfumerie-c521b.firebaseapp.com",
  databaseURL: "https://parfumerie-c521b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "parfumerie-c521b",
  storageBucket: "parfumerie-c521b.firebasestorage.app",
  messagingSenderId: "654802017010",
  appId: "1:654802017010:web:b83ea78213e17c61f54e6b",
  measurementId: "G-28YQB2EBLM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db =getFirestore(app);