import { redirect } from "next/navigation";
import styles from "./page.module.css";

export default async function NewPostPage({ params }) {
  const p = await params;
  const site = p.site;

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
    <div>
      <div className={styles.container}>
        <form className={styles.formBox} action={handleSubmit}>
          <p className={styles.posterName}>Laura Guo</p>
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
    </div>
  );
}
