import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


console.log(process.env.REACT_APP_FIREBASE_API_KEY)

// console.log(process.env.REACT_APP_FIREBASE-API-KEY)
const firebaseConfig = {
  apiKey: "AIzaSyAnVeJphaVjzjMjji0zQuStwaB2771np_c" ,
  authDomain: "newdashboard-5eaf5.firebaseapp.com",
  projectId: "newdashboard-5eaf5",
  storageBucket: "newdashboard-5eaf5.appspot.com",
  messagingSenderId: "28303920507",
  appId: "1:28303920507:web:77d443e9da99d9025a81de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const  auth = getAuth()