// ════════════════════════════════════════════════════════
// firebase-config.js — Firebase v9 Modular SDK Setup
// ════════════════════════════════════════════════════════
// 🔴 REPLACE these values with your Firebase project config
// from: Firebase Console → Project Settings → Your Apps → SDK setup
// ════════════════════════════════════════════════════════

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// ════════════════════════════════════════════════════════
// FIRESTORE SECURITY RULES (paste into Firebase Console):
// ════════════════════════════════════════════════════════
/*
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Bookings: users can create; only admin can read/update/delete
    match /bookings/{bookingId} {
      allow create: if true;
      allow read, update, delete: if request.auth != null
        && request.auth.token.email == 'admin@noirblade.com';
    }

    // Reviews: anyone can create approved=false; admin can read/update/delete all
    match /reviews/{reviewId} {
      allow create: if request.resource.data.approved == false;
      allow read: if resource.data.approved == true
        || (request.auth != null && request.auth.token.email == 'admin@noirblade.com');
      allow update, delete: if request.auth != null
        && request.auth.token.email == 'admin@noirblade.com';
    }

    // Barbers: public read; only admin can write
    match /barbers/{barberId} {
      allow read: if true;
      allow write: if request.auth != null
        && request.auth.token.email == 'admin@noirblade.com';
    }
  }
}
*/
