import "../styles/globals.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Nav from "../components/Nav";
import { app } from "../lib/firebase";

const auth = getAuth(app);
console.log(auth);

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export { auth };
