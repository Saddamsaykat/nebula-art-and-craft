// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey:import.meta.env.VITE_API_KEY,
//     authDomain:import.meta.env.VITE_AUTH_DOMAIN,
//     projectId:import.meta.env.VITE_PROJECT_ID,
//     storageBucket:import.meta.env.VITE_STORAGE_BUCKET,
//     messagingSenderId:import.meta.env.VITE_MESSAGING_SENDER_ID,
//     appId:import.meta.env.VITE_APP_ID
//     };
    
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// export default auth


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvgbaq0Jnv478nEBskn73Y8TRcmIIIxoQ",
  authDomain: "ass10-b8f53.firebaseapp.com",
  projectId: "ass10-b8f53",
  storageBucket: "ass10-b8f53.firebasestorage.app",
  messagingSenderId: "618216265899",
  appId: "1:618216265899:web:711479f303ef8e9753ffee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

