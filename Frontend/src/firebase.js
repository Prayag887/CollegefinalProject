// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcQiorZWVhReKNwxc7lm2JybnNtqdGFkA",
  authDomain: "sustainable-energy-a5820.firebaseapp.com",
  projectId: "sustainable-energy-a5820",
  storageBucket: "sustainable-energy-a5820.appspot.com",
  messagingSenderId: "489736727935",
  appId: "1:489736727935:web:07d698a04bcd653cf7be4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)