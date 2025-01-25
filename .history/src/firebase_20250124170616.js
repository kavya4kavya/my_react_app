// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyA-kZ1144R13wABRnhy8kZXq5t6ieZoRm4",
    authDomain: "karigar-b8e10.firebaseapp.com",
    projectId: "karigar-b8e10",
    storageBucket: "karigar-b8e10.firebasestorage.app",
    messagingSenderId: "246356306783",
    appId: "1:246356306783:web:6a04c6ba108f4dff4924ea"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { auth, firestore, storage };