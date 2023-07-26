// import AsyncStorage from "@react-native-async-storage/async-storage";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD55BQXIfi8UirvDbiqQVpotTRB9KGDvL8",
  authDomain: "my-project-react-native-392210.firebaseapp.com",
  projectId: "my-project-react-native-392210",
  storageBucket: "my-project-react-native-392210.appspot.com",
  messagingSenderId: "332908643758",
  appId: "1:332908643758:web:57a4d6228db5bc2e37a46c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const firestore = getFirestore(app);
export const storage = getStorage(app);