import { redirect } from "next/navigation";
import styles from "./page.module.css";

export default function NewPostPage({ params }) {
  const site = params.site;

  async function handleSubmit(formData) {
    "use server";

    const title = formData.get("title");
    const content = formData.get("content");

    // Handle storing the post however you like (DB, API call, etc.)
    console.log({ title, content, site });

    // Redirect after submission
    redirect(`/site/${site}`);
  }

  return (
    <div className={styles.container}>
      <form className={styles.formBox} action={handleSubmit}>
        <p className={styles.posterName}>Azariah</p>
        <input
          className={styles.titleInput}
          type="text"
          placeholder="Post Title"
          name="title"
          required
        />
        <textarea
          className={styles.contentInput}
          placeholder="Write your post here..."
          name="content"
          required
        />
        <button type="submit" className={styles.submitButton}>
          Submit Post
        </button>
      </form>
    </div>
  );
}
