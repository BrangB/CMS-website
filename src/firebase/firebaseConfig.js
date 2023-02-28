// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-O4ItYvUy12Pr319fBIUAZJ8hn7mplBo",
  authDomain: "jojo-quiz-6038f.firebaseapp.com",
  projectId: "jojo-quiz-6038f",
  storageBucket: "jojo-quiz-6038f.appspot.com",
  messagingSenderId: "967763368890",
  appId: "1:967763368890:web:1c3d564f1dd93af3bf9b83",
  measurementId: "G-W5DCLHTHSN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);