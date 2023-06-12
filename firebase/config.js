// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLRFyE-Z01UmC2uxCGQ8AZLp6lfAWAaYQ",
  authDomain: "pcd-in.firebaseapp.com",
  projectId: "pcd-in",
  storageBucket: "pcd-in.appspot.com",
  messagingSenderId: "467455222369",
  appId: "1:467455222369:web:ef1438204e9d0f237dc020",
  measurementId: "G-VJDXM3L8VC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
export const storage = getStorage(app);

export default db;  