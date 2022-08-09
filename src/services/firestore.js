// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCDZgkZrnA_zJe6COXpwKmyxAPVpdB58QM",
    authDomain: "nology-firstfirestore.firebaseapp.com",
    projectId: "nology-firstfirestore",
    storageBucket: "nology-firstfirestore.appspot.com",
    messagingSenderId: "104403500489",
    appId: "1:104403500489:web:4ec8bc2f6d78ffb3223c18",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const firestore = app.firestore();
