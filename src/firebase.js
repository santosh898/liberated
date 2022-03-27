// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { initializeFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB5-P1yIf81uFLq-9WDlue3F-0bkL8nlKE',
  authDomain: 'liberated26mar.firebaseapp.com',
  projectId: 'liberated26mar',
  storageBucket: 'liberated26mar.appspot.com',
  messagingSenderId: '519649816785',
  appId: '1:519649816785:web:fb50c9445e020cc6ff15f0',
  measurementId: 'G-SHXHJ7ESK3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = initializeFirestore(app, { experimentalForceLongPolling: true });

export { db, auth };
