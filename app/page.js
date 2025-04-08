"use client";

import { useEffect, useState } from "react";
import LoginButton from "./components/login-button";
import styles from "./page.module.css";

export default function Home() {
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        : (
        <div className={styles.container}>
          <h2>Welcome!</h2>
          <LoginButton />
        </div>
        )
      </main>
    </div>
  );
}
