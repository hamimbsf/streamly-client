// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnJgpgcQOEjgKhzI6zkhrVjnvLFH_72Ys",
  authDomain: "streamly-712bd.firebaseapp.com",
  projectId: "streamly-712bd",
  storageBucket: "streamly-712bd.firebasestorage.app",
  messagingSenderId: "217019729602",
  appId: "1:217019729602:web:95b44d3433117331e15d5b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
