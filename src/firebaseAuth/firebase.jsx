import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFyC_XpY3D3wkytS_E0zyXVUNAAvy30t4",
  authDomain: "curd-abb56.firebaseapp.com",
  databaseURL: "https://curd-abb56-default-rtdb.firebaseio.com",
  projectId: "curd-abb56",
  storageBucket: "curd-abb56.appspot.com",
  messagingSenderId: "255084411669",
  appId: "1:255084411669:web:cba8ac1158e8ef308d471c",
  measurementId: "G-GWGY9LEQPC"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
