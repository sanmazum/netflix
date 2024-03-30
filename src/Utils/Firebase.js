// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfDQeuaMjTdDxOSSsS1BZtYyJAce4dUxg",
  authDomain: "netflixgpt-69e99.firebaseapp.com",
  projectId: "netflixgpt-69e99",
  storageBucket: "netflixgpt-69e99.appspot.com",
  messagingSenderId: "839049605234",
  appId: "1:839049605234:web:976efdf0420ceff24f12eb",
  measurementId: "G-RNGXL51CRW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
