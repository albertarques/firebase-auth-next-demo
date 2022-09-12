import styles from "../../styles/Home.module.css";
import { auth } from "../_app";

function restricted1() {
  if (auth.currentUser) {
    return (
      <div className={styles.container}>
        <h1>Pàgina restringida 1</h1>
        <h2>Bienvenido usuario: {auth.currentUser.email}</h2>
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <h1>Pàgina restringida 1</h1>
        <h2>
          Usted no és un usuario registrado, por favor, identifiquese o abandone
          el sitio.
        </h2>
      </div>
    );
  }
}

export default restricted1;
