// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBrhcHxOe4o2j_yj0X0PpjgLvDK6tgAg0",
  authDomain: "yelp-damzy.firebaseapp.com",
  projectId: "yelp-damzy",
  storageBucket: "yelp-damzy.appspot.com",
  messagingSenderId: "887611940475",
  appId: "1:887611940475:web:c951ae86c36b453d6c8cde"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }