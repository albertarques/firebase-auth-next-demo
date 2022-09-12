import styles from "../styles/Home.module.css";
import Link from "next/link";
import { auth, user } from "./_app";

export default function Home() {
  function ifIsLoggedShowName() {
    const user = auth.currentUser;
    return user ? user.email : "usuario no logeado.";
  }

  return (
    <div className={styles.container}>
      <h1>Implementando firebase</h1>
      <h2>Usuario con sesión activa: {ifIsLoggedShowName()} </h2>
    </div>
  );
}
