import styles from "../styles/Home.module.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { useState } from "react";
import { auth } from "./_app";

function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [valPassword, setValPassword] = useState();

  const { push } = useRouter();

  const registerUser = async (e) => {
    e.preventDefault();
    // // Validation email regex
    // if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(username)) {
    //   return alert("Has introducido una dirección de correo no válida.");
    // }
    // // Validation password -> valPassword
    // if (password !== valPassword)
    //   return alert("Las contraseñas deben coincidir.");

    try {
      await createUserWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          const user = userCredential.user;
          console.log(user);
        }
      );
      push("/");
    } catch (error) {
      console.log(error.code); // 'auth/network-request-failed'
      console.log(error.message); // 'Firebase: Error (auth/network-request-failed).'
      console.log(error.name); // 'FirebaseError'
      console.log(error.customData); // {}
    }
  };

  return (
    <div className={styles.container}>
      <h1>Implementando firebase</h1>
      <form onSubmit={registerUser}>
        <legend>Register with email/password</legend>
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
        <input
          id="valPassword"
          type="password"
          name="password"
          placeholder="Repeat password"
          onChange={(e) => setValPassword(e.target.value)}
          required
        />
        <button>Send!</button>
      </form>
    </div>
  );
}

export default Register;
