// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBt27V2QYeVrLNCwZUWUdcyMNPp_xIrSw8",
  authDomain: "tree-planet-25373.firebaseapp.com",
  projectId: "tree-planet-25373",
  storageBucket: "tree-planet-25373.firebasestorage.app",
  messagingSenderId: "163505119294",
  appId: "1:163505119294:web:bbf612295cb48f3a65316f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
