import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./_app";

export default function LogIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { push } = useRouter();

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          // Signed in
          // ...
          push("/logged");
        }
      );
    } catch (error) {
      console.log(error.code);
      console.log(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Implementando firebase</h1>
      <form onSubmit={loginUser}>
        <legend>Sign in with email/password</legend>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button>Send!</button>
      </form>
    </div>
  );
}
