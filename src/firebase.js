// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyBfXFMGcBlOHaMyWy21Ieuo9790DqXds9E",
  authDomain: "astralio.firebaseapp.com",
  projectId: "astralio",
  storageBucket: "astralio.appspot.com",
  messagingSenderId: "688237495209",
  appId: "1:688237495209:web:a149402706320ee8193ab8",
  measurementId: "G-KGZZ2XJ21M"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
//connect db
const db = app.firestore();
//auth indication
const auth = firebase.auth();
//add provider: to add google social login
const provider = new firebase.auth.GoogleAuthProvider();
//access storage
const storage = firebase.storage();

export{ auth , provider, storage };
export default db;