import styles from "../styles/Home.module.css";

import { auth } from "./_app";

export default function Logged() {
  const user = auth.currentUser;

  if (user) {
    return (
      <div className={styles.container}>
        <h2>Hola usuario: {user.email}</h2>
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <h2>Eres un usuario no identificado</h2>
        <p>Por favor, logeate.</p>
      </div>
    );
  }
}
