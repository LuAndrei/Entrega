// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcfNhNEslRKkFxpmBlsxbTApFPATzxL4A",
  authDomain: "warm-particle-388619.firebaseapp.com",
  projectId: "warm-particle-388619",
  storageBucket: "warm-particle-388619.appspot.com",
  messagingSenderId: "641681662628",
  appId: "1:641681662628:web:38ccbb61279f9bc7c6fc31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);