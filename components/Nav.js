import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { logInUser, logInUserPreconf, logOut } from "../lib/Firebase";
import { auth } from "../lib/Firebase";

function Nav() {
  const [user] = useAuthState(auth);

  function isUserLogged() {
    if (user) {
      return <button onClick={logOut}>Log Out</button>;
    }
  }

  function isUserLogOut() {
    if (!user) {
      return (
        <>
          <button>
            <Link href={"/register"}>Register</Link>
          </button>
          <button>
            <Link href={"/login"}>Login</Link>
          </button>
        </>
      );
    }
  }

  return (
    <div className={styles.container}>
      <button>
        <Link href={"/"}>Home</Link>
      </button>
      {isUserLogged()}
      {isUserLogOut()}
      <button onClick={logInUserPreconf}>Login Preconfigured</button>
    </div>
  );
}

export default Nav;
