"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./page.module.css";

export default function NewPostPage() {
  const router = useRouter();
  const params = useParams();
  const site = params.site;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send the data to your backend here
    console.log({ title, content, site });

    // Redirect back to the site discussion board
    router.push(`/site/${site}`);
  };

  return (
    <div className={styles.container}>
      <form className={styles.formBox} onSubmit={handleSubmit}>
        <p className={styles.posterName}>Azariah</p>
        <input
          className={styles.titleInput}
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          className={styles.contentInput}
          placeholder="Write your post here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit" className={styles.submitButton}>
          Submit Post
        </button>
      </form>
    </div>
  );
}
