import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZcDMW8L-SJ8xsjS1hV0AHkMHwTQBAaxs",
  authDomain: "reactjsregisterapp.firebaseapp.com",
  projectId: "reactjsregisterapp",
  storageBucket: "reactjsregisterapp.appspot.com",
  messagingSenderId: "383256224776",
  appId: "1:383256224776:web:8036c41d3a15da65bf9dbd",
  measurementId: "G-QD0EJ808Z8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);