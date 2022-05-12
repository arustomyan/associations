
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { onAuthStateChanged } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAaeyyjltSEwL6lyz9gYt3tI28AdTqFnDc",
  authDomain: "associations-app-e564c.firebaseapp.com",
  projectId: "associations-app-e564c",
  storageBucket: "associations-app-e564c.appspot.com",
  messagingSenderId: "889927919487",
  appId: "1:889927919487:web:d84f4147c3646b3fe81c4a"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export let auth1 = !!!auth.currentUser




console.log(auth)

export const firestore = getFirestore(app);
