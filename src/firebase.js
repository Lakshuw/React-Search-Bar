
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAelo3dD4YSYJxK8ReGiscviVAGJ6PtOh8",
  authDomain: "datedate-e6bca.firebaseapp.com",
  projectId: "datedate-e6bca",
  storageBucket: "datedate-e6bca.appspot.com",
  messagingSenderId: "270984702188",
  appId: "1:270984702188:web:fd53bea1c46d22f1f65dc9",
  measurementId: "G-0VZ4XY4L8P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore=getFirestore(app);