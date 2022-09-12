import { signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { auth } from "./_app";

export default function Logout() {
  const { push } = useRouter();
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log("You are logged out!");
      console.log(auth);
      push("/login");
    })
    .catch((error) => {
      // An error happened.
    });
}
