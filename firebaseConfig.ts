import { FirebaseApp, initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAXmw7irqa-lG-9-ffP6jt9L3JvsVhSdHI",
    authDomain: "grocery-list-1ea6c.firebaseapp.com",
    projectId: "grocery-list-1ea6c",
    storageBucket: "grocery-list-1ea6c.appspot.com",
    messagingSenderId: "25904079426",
    appId: "1:25904079426:web:6c83565c6e358e070c43db",
    measurementId: "G-XRBTN0KCTN"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);

