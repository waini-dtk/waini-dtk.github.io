
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

export const firebaseConfig = {
  apiKey: "AIzaSyD_tYewB-dTc8QehyHSXRPbTohU-hoC560",
  authDomain: "waini-dtk.firebaseapp.com",
  projectId: "waini-dtk",
  storageBucket: "waini-dtk.firebasestorage.app",
  messagingSenderId: "921756725945",
  appId: "1:921756725945:web:0ceb6b1b4988645afb2168"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
