"use client";
import { useRouter } from "next/navigation";
import styles from "./buttons.module.css";

export default function NewPostButton({ site }) {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => router.push(`/site/${site}/new`)}
        className={styles.newPostButton}
      >
        New Post
      </button>
    </div>
  );
}
