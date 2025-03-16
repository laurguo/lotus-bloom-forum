"use client";

import { useRouter } from "next/navigation";
import styles from "./buttons.module.css";

export default function LoginButton() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/api/auth/login");
  };

  return (
    <button onClick={handleLogin} className={styles.loginButton}>
      Sign in with Email
    </button>
  );
}
