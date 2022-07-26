// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4Zqe-FL2XwnrqsQ6qA_GBMbKavXnklsg",
  authDomain: "kart-project-b95f5.firebaseapp.com",
  projectId: "kart-project-b95f5",
  storageBucket: "kart-project-b95f5.appspot.com",
  messagingSenderId: "409421109353",
  appId: "1:409421109353:web:3143a343d7bae6a6d72af8",
  measurementId: "G-TGTSWSZN6F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth(app);
 export const provider = new GoogleAuthProvider();