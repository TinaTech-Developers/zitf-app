// /src/firebase/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import {
  getAuth,
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  Firestore,
  collection,
  getDocs,
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDEZfi8UUGAZ3uRlDBxzOfGy-cL2tkEep4",
  authDomain: "zitf-app.firebaseapp.com",
  projectId: "zitf-app",
  storageBucket: "zitf-app.firebasestorage.app",
  messagingSenderId: "678402714382",
  appId: "1:678402714382:android:dfbb4c9567714d2b3b455f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
const auth: Auth = getAuth(app);
const firestore: Firestore = getFirestore(app);

export {
  auth,
  firestore,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  collection,
  getDocs,
  doc,
  setDoc,
  getDoc,
};
