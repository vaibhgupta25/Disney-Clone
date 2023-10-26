import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCs6jnDi1XghM6X_4JmjxaoSUd9E8nvuz0",
  authDomain: "disneyclone-effea.firebaseapp.com",
  projectId: "disneyclone-effea",
  storageBucket: "disneyclone-effea.appspot.com",
  messagingSenderId: "846921833492",
  appId: "1:846921833492:web:af24962f9ecb6e7d77db01",
  measurementId: "G-FJHP902011"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export {auth,provider,storage};
export default db;
