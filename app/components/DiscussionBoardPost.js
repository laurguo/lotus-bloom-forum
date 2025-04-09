"use client";
import styles from "./DiscussionBoardPost.module.css";
import { useRouter } from "next/navigation";

export default function DiscussionBoardPost({ site }) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(`/site/${site}/123`)}
      className={styles.post}
    >
      <div className={styles.nameID}>
        <div>name of person</div>
        <div>role tags</div>
      </div>
      <div className={styles.postTitle}>title of the post</div>
    </button>
  );
}
