// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRw1TqNogKWeHwd7vs3NO2fwYg4rP0Ing",
  authDomain: "instagram-clone-51611.firebaseapp.com",
  projectId: "instagram-clone-51611",
  storageBucket: "instagram-clone-51611.appspot.com",
  messagingSenderId: "538191288139",
  appId: "1:538191288139:web:8f07c989fd3b506ef37ace",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
