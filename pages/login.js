import styles from "../styles/Home.module.css";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logOut, logInUser, logInUserPreconf } from "../lib/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";

export default function LogIn() {
  // On every page that need user, loading or error, we need to refer useStateAuth
  const [user] = useAuthState(auth);
  const { push } = useRouter();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password).then(() => {
        // Signed in
        // ...
        push("/");
      });
    } catch (error) {
      console.log(error.code);
      console.log(error.message);
    }
  };

  if (!user) {
    return (
      <div className={styles.container}>
        <p>Error: usuario no identificado.</p>
        <form onSubmit={loginUser}>
          <input
            id="email"
            type="email"
            placeholder="Type your email"
            autoComplete="off"
            onBlur={(e) => setEmail(e.target.value)}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            id="password"
            type="password"
            autoComplete="off"
            placeholder="Type your password"
            onBlur={(e) => setEmail(e.target.value)}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>Submit!</button>
        </form>
      </div>
    );
  }
  if (user) {
    return (
      <div className={styles.container}>
        <p>Current User: {user.email}</p>
        <button onClick={logOut}>Log out</button>
      </div>
    );
  }
}
