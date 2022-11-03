import firebaseConfig from "./config/firebase.config";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp(firebaseConfig);


const auth = getAuth();
const db = getFirestore();

export { auth, db }