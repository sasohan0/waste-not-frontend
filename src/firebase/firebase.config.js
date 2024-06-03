// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.WASTE_NOT_apiKey,
  authDomain: import.meta.env.WASTE_NOT_authDomain,
  projectId: import.meta.env.WASTE_NOT_projectId,
  storageBucket: import.meta.env.WASTE_NOT_storageBucket,
  messagingSenderId: import.meta.env.WASTE_NOT_messagingSenderId,
  appId: import.meta.env.WASTE_NOT_appId,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
