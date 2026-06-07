// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBB6sAFnDdjremOYbpB7pSi5RjlYpU9zAc",
  authDomain: "myfirstproject-70e95.firebaseapp.com",
  projectId: "myfirstproject-70e95",
  storageBucket: "myfirstproject-70e95.firebasestorage.app",
  messagingSenderId: "898929202144",
  appId: "1:898929202144:web:601e4b33ea936b4fb59185",
  measurementId: "G-6ZYEPG98DX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);