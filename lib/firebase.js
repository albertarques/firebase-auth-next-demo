import { initializeApp } from "firebase/app";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDZAqX_MlxYLf4CWSc0FoeyaF6Pwx_n3HY",

  authDomain: "tesla-webclone-73930.firebaseapp.com",

  projectId: "tesla-webclone-73930",

  storageBucket: "tesla-webclone-73930.appspot.com",

  messagingSenderId: "847032652667",

  appId: "1:847032652667:web:ca044220c8b06d183823de",
};

const app = initializeApp(firebaseConfig);

export { app };
