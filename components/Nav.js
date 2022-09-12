import styles from "../styles/Home.module.css";
import Link from "next/link";
import { auth } from "../pages/_app";

function Nav() {
  const user = auth.currentUser;

  function isUserLogged(user) {
    if (user) {
      return (
        <button>
          <Link href={"/logout"}>LogOut</Link>
        </button>
      );
    } else {
      return (
        <>
          <button>
            <Link href={"/login"}>Login</Link>
          </button>
          <button>
            <Link href={"/register"}>Register</Link>
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
      <button>
        <Link href={"/logged"}>Logged</Link>
      </button>
      <button>
        <Link href={"/restricted/restricted1"}>Restricted1</Link>
      </button>
      {isUserLogged(user)}
    </div>
  );
}

export default Nav;
