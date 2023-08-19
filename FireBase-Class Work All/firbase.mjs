 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
 import { getAuth,createUserWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
 import { getFirestore   } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyAMyPnigA82hTdQB9FIzoXeDd37C1jamZ8",
   authDomain: "batch9-983b4.firebaseapp.com",
   projectId: "batch9-983b4",
   storageBucket: "batch9-983b4.appspot.com",
   messagingSenderId: "262976751573",
   appId: "1:262976751573:web:fe3f6dda708a1dd7365f5c"
 };

 // Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
