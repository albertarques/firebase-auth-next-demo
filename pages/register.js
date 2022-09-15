import styles from "../styles/Home.module.css";

function Register() {
  return (
    <div className={styles.container}>
      <h1>Implementando firebase</h1>
      <form>
        <legend>Register with email/password</legend>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <input
          id="valPassword"
          type="password"
          name="password"
          placeholder="Repeat password"
          required
        />
        <button>Send!</button>
      </form>
    </div>
  );
}

export default Register;
