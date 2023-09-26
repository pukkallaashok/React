// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcmdr4e90lRNWDANlntYfG4kDYKhzpBaY",
  authDomain: "foodapp-4872f.firebaseapp.com",
  projectId: "foodapp-4872f",
  storageBucket: "foodapp-4872f.appspot.com",
  messagingSenderId: "207193786075",
  appId: "1:207193786075:web:94622897b8c22b1c49aefe",
  measurementId: "G-QJVLV4ET96"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
export default firebaseConfig;