
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASYMjYWRLk029OYIYdxeIawr469-c0RP4",
  authDomain: "portfolio-bc237.firebaseapp.com",
  projectId: "portfolio-bc237",
  storageBucket: "portfolio-bc237.appspot.com",
  messagingSenderId: "4078982223",
  appId: "1:4078982223:web:77460c633dbc145d6fc63a",
  measurementId: "G-M731WKYZBM"
};


const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)