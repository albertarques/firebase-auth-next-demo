// Import functions from Firebase App
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { signOut, signInWithEmailAndPassword } from "firebase/auth";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDZAqX_MlxYLf4CWSc0FoeyaF6Pwx_n3HY",
  authDomain: "tesla-webclone-73930.firebaseapp.com",
  projectId: "tesla-webclone-73930",
  storageBucket: "tesla-webclone-73930.appspot.com",
  messagingSenderId: "847032652667",
  appId: "1:847032652667:web:4261e3079c97ef623823de",
  measurementId: "G-4RCVPVTRT0",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const logInUser = async () => {
  try {
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      // Signed in
      // ...
      push("/");
    });
  } catch (error) {
    console.log(error);
  }
};

export const logInUserPreconf = () => {
  signInWithEmailAndPassword(auth, "albertarques@gmail.com", "catalina123");
};

export const logOut = () => {
  signOut(auth);
};

export function ifIsUserLoggedShowEmail(user, loading) {
  if (user) {
    return user.email;
  }
  if (loading) {
    return "...cargando usuario";
  } else {
    return "usuario no identificado.";
  }
}
