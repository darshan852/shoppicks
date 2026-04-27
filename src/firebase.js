// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8dhuqgMOlXkfOjqqn2mvP3wqFOES_8oo",
  authDomain: "shoppicks.firebaseapp.com",
  projectId: "shoppicks",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);