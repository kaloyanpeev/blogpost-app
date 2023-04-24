// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBqMfzFA_HQRdPL9uv6QW2B23H6CraqHk8",
  authDomain: "blogpost-app-6b60b.firebaseapp.com",
  projectId: "blogpost-app-6b60b",
  storageBucket: "blogpost-app-6b60b.appspot.com",
  messagingSenderId: "755689998719",
  appId: "1:755689998719:web:50c0efbb7fc85cebd6f24a",
  measurementId: "G-4K4JZ383QL",
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);
