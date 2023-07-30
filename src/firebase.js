// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA44MjBLQp9hijsXLHT-gQ3UcOnm3qya_Q",

    authDomain: "netflix-clone-41cf5.firebaseapp.com",

    projectId: "netflix-clone-41cf5",

    storageBucket: "netflix-clone-41cf5.appspot.com",

    messagingSenderId: "5573856357",

    appId: "1:5573856357:web:f16bb6f7a4d3a1e2eb4a8c",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
