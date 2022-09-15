import styles from "../styles/Home.module.css";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logOut, logInUser, logInUserPreconf } from "../lib/Firebase";

export default function LogIn() {
  // On every page that need user, loading or error, we need to refer useStateAuth
  const [user] = useAuthState(auth);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  if (!user) {
    return (
      <div>
        <p>Error: usuario no identificado.</p>
        <form onSubmit={() => logInUser(email, password)}>
          <input
            id="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            id="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>Submit!</button>
        </form>
      </div>
    );
  }
  if (user) {
    return (
      <div>
        <p>Current User: {user.email}</p>
        <button onClick={logOut}>Log out</button>
      </div>
    );
  }
  return <button onClick={logInUserPreconf}>Log in</button>;
}
