import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChdsdx8FtvCS4wLKwLwDkecJBWS0ggF1A",
  authDomain: "todolist-70312.firebaseapp.com",
  projectId: "todolist-70312",
  storageBucket: "todolist-70312.appspot.com",
  messagingSenderId: "805227458730",
  appId: "1:805227458730:web:21a64bdbff7f16b2bca0d3",
  measurementId: "G-Q84B7LKELQ"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth=getAuth();

export { db,auth };
