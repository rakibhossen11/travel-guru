// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCr7pUaGCMvQABIqGs-KwyR0xksHobK-U",
  authDomain: "travel-guru-c0baf.firebaseapp.com",
  projectId: "travel-guru-c0baf",
  storageBucket: "travel-guru-c0baf.appspot.com",
  messagingSenderId: "386751773059",
  appId: "1:386751773059:web:f6cd4867b741123a305eb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;