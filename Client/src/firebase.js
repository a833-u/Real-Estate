// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-d65ae.firebaseapp.com",
  projectId: "real-estate-d65ae",
  storageBucket: "real-estate-d65ae.appspot.com",
  messagingSenderId: "752274199275",
  appId: "1:752274199275:web:ceea22059267fee92a64ae"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);