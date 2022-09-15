import styles from "../styles/Home.module.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, ifIsUserLoggedShowEmail } from "../lib/Firebase";

export default function Home() {
  // On every page that need user, loading or error, we need to refer useStateAuth
  const [user, loading] = useAuthState(auth);

  return (
    <div className={styles.container}>
      <h1>Implementando firebase</h1>
      <h2>
        Usuario con sesión activa: {ifIsUserLoggedShowEmail(user, loading)}
      </h2>
    </div>
  );
}
