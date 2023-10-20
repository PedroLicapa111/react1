// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
import { getStorage, ref, uploadBytes } from "firebase/storage ";
import { getFirestore, addDoc, 
    collection, getDoc, 
    getDocs, query, 
    where, setDoc, 
    deleteDoc, updateDoc 
    } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnpZ_fc63smwLGPmWsm1DU-dcQvlB2HMk",
  authDomain: "proyecto-react1-75283.firebaseapp.com",
  projectId: "proyecto-react1-75283",
  storageBucket: "proyecto-react1-75283.appspot.com",
  messagingSenderId: "220695784784",
  appId: "1:220695784784:web:dc252102b6a7416d081055",
  measurementId: "G-17NH49DMZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth      = getAuth(app);
export const db        = getFirestore(app);
const storage   = getStorage(app);

