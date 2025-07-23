// src/firebase.js

// Import functions from Firebase v9+ modular SDK
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyASDV4wHajx5ycl0cbOJb3Jr12Pzr1JwoU",
  authDomain: "eduform-ffd1d.firebaseapp.com",
  databaseURL: "https://eduform-ffd1d-default-rtdb.firebaseio.com",
  projectId: "eduform-ffd1d",
  storageBucket: "eduform-ffd1d.appspot.com",
  messagingSenderId: "871559454241",
  appId: "1:871559454241:web:e4f3253f059ed478ad4d60",
  measurementId: "G-NMDTXRFVCD"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize services

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Export
export { auth, provider };
export const db = getFirestore(app);

