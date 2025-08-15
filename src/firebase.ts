// src/firebase.ts

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// ඔබ Firebase Console එකෙන් ලබාගත් config දත්ත
const firebaseConfig = {
  apiKey: "AIzaSyCPjuGiNj6wo0NeAV6gunOhlpYOX2CoVgM",
  authDomain: "oubex-editing.firebaseapp.com",
  projectId: "oubex-editing",
  storageBucket: "oubex-editing.firebasestorage.app",
  messagingSenderId: "294107343291",
  appId: "1:294107343291:web:d9cfcdfaa66f04fabbfc9e",
};

// Firebase සේවාව ආරම්භ කරන්න
const app = initializeApp(firebaseConfig);

// Authentication සේවාව ලබා ගන්න
const auth = getAuth(app);

// Google Login සඳහා provider එකක් සකසන්න
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };