import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

export default function Error500() {
  const { push } = useRouter();
  push("/");
}
