import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBop5gHayZsc56Cr_zEwfpJsUqR0lZNqbY",
    authDomain: "recipe-react-50d56.firebaseapp.com",
    projectId: "recipe-react-50d56",
    storageBucket: "recipe-react-50d56.appspot.com",
    messagingSenderId: "351809699211",
    appId: "1:351809699211:web:5ea2a4c69d1378bf46c38e"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();

export { db }