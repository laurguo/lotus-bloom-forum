"use client";

import { useEffect, useState } from "react";
import LoginButton from "./components/login-button";
import styles from "./page.module.css";
import Image from "next/image";

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
        <div className={styles.container}>
          <Image src="/LBText.jpg" alt="picture" width={202} height={150} />
          <h1>Welcome!</h1>
          <LoginButton />
        </div>
      </main>
    </div>
  );
}
