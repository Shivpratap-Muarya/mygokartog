// Import the functions you need from the SDKs you need
import firebase from "firebase";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4GAT7dUFGSWhK5H6coGG43hzRbp6tWe0",
  authDomain: "mygokart-aff11.firebaseapp.com",
  projectId: "mygokart-aff11",
  storageBucket: "mygokart-aff11.appspot.com",
  messagingSenderId: "613878409098",
  appId: "1:613878409098:web:e7f5510b512037fb258a73",
  measurementId: "G-RJ7CEX4R07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);