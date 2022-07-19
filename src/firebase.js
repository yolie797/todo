import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDP8HYNfNF1_ZNp7HGIlLVRDzDVBnQSsr8",
  authDomain: "todolist-ecba9.web.app",
  projectId: "todolist-ecba9",
  storageBucket: "todolist-ecba9.appspot.com",
  messagingSenderId: "1025461531352",
  appId: "1:1025461531352:web:a171331893732c92ba9dad",
  measurementId: "G-CKBWZH4B2Q"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth=getAuth();

export { db,auth };
