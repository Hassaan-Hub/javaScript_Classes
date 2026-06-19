import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import {
    getFirestore,
    doc,
    setDoc
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

import {
    getAuth,
    createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBB6sAFnDdjremOYbpB7pSi5RjlYpU9zAc",
    authDomain: "myfirstproject-70e95.firebaseapp.com",
    projectId: "myfirstproject-70e95",
    storageBucket: "myfirstproject-70e95.firebasestorage.app",
    messagingSenderId: "898929202144",
    appId: "1:898929202144:web:601e4b33ea936b4fb59185",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const name = document.getElementById("name");
const number = document.getElementById("number");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submit = document.getElementById("submit");

submit.addEventListener("click", async () => {
    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email.value.trim(),
            password.value.trim()
        );

        const user = userCredential.user;

        await setDoc(doc(db, "users", user.uid), {
            name: name.value.trim(),
            number: number.value.trim(),
            email: email.value.trim()
        });

        console.log("✅ User created + Firestore data saved");

    } catch (error) {
        console.log("❌ Error:", error.code, error.message);
    }
});