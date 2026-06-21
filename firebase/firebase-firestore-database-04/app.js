import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword
}
  from
  "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";


import {
  getFirestore,
  doc,
  setDoc
}
  from
  "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyBB6sAFnDdjremOYbpB7pSi5RjlYpU9zAc",
  authDomain: "myfirstproject-70e95.firebaseapp.com",
  projectId: "myfirstproject-70e95",
  storageBucket: "myfirstproject-70e95.firebasestorage.app",
  messagingSenderId: "898929202144",
  appId: "1:898929202144:web:601e4b33ea936b4fb59185",
  measurementId: "G-6ZYEPG98DX"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const name = document.getElementById('name');
const number = document.getElementById('number');
const email = document.getElementById('email');
const password = document.getElementById('password');
const submitBtn = document.getElementById('submitBtn');




submitBtn.addEventListener('click', async () => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email.value,
      password.value
    )
    const user = userCredential.user;

    await setDoc(doc(db, "users", user.uid), {
      name: name.value,
      number: number.value,
      email: email.value,
      password: password.value,
      userUid: user.uid
    });
    console.log('user created plus firestore data saved');
  } catch (error) {
    const errorMessage = error.message
    console.log(errorMessage);
  }
})