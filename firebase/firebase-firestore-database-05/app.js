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
    setDoc,
    serverTimestamp
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

    let userData = {
        name: name.value,
        number: number.value,
        email: email.value,
        password: password.value,
    }

    const userCredential = await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
    )
        .then(async (userCredential) => {
            const user = userCredential.user;
            const userId = user.uid

            await setDoc(doc(db, "users"), {
                ...userData, userId
            });
            console.log('user created plus firestore data saved');
        })
        .catch((error) => {
            const errorMessage = error.message
            console.log(errorMessage);
        })
})