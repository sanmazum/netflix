// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTyLz1Du2kr3c6XUPpjpUoBBZi07ZBY4w",
  authDomain: "netflixgpt-4ba7b.firebaseapp.com",
  projectId: "netflixgpt-4ba7b",
  storageBucket: "netflixgpt-4ba7b.appspot.com",
  messagingSenderId: "444759322755",
  appId: "1:444759322755:web:6b2cd543329cbbadd76bb6",
  measurementId: "G-2EJMHWB1SG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
