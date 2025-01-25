import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyA-kZ1144R13wABRnhy8kZXq5t6ieZoRm4",
    authDomain: "karigar-b8e10.firebaseapp.com",
    projectId: "karigar-b8e10",
    storageBucket: "karigar-b8e10.firebasestorage.app",
    messagingSenderId: "246356306783",
    appId: "1:246356306783:web:6a04c6ba108f4dff4924ea"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize services
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();

export { auth, firestore, storage };