import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCvQQP6Q0c7m3z9AEoRrrgDvXLZwyIKRto",
  authDomain: "saloon-27e1c.firebaseapp.com",
  projectId: "saloon-27e1c",
  storageBucket: "saloon-27e1c.firebasestorage.app",
  messagingSenderId: "40581976415",
  appId: "1:40581976415:web:565d277e3e3827907766ea"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
