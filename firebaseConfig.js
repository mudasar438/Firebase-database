// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-6mWoEfWONdaxsbb90D6V-ZeGGQZoaME",
  authDomain: "crud-operation-7cc68.firebaseapp.com",
  projectId: "crud-operation-7cc68",
  storageBucket: "crud-operation-7cc68.appspot.com",
  messagingSenderId: "766781885591",
  appId: "1:766781885591:web:c98e30ebe65b2146302dd2"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const database = getFirestore(app)