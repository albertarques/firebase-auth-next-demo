import styles from "../styles/Home.module.css";
import Link from "next/link";
import { auth } from "./_app";

export default function Home() {
  function ifIsLoggedShowName() {
    const user = auth.currentUser;
    return user ? user.email : "usuario no logeado.";
  }

  return (
    <div className={styles.container}>
      <h1>Implementando firebase</h1>
      <h2>Usuario con sesión activa: {ifIsLoggedShowName()} </h2>
      <button>
        <Link href={"/login"}>Login</Link>
      </button>
      <button>
        <Link href={"/logged"}>Logged</Link>
      </button>
      <button>
        <Link href={"/logout"}>LogOut</Link>
      </button>
    </div>
  );
}
