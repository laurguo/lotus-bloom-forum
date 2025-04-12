import styles from "./DiscussionBoardPost.module.css";

export default function DiscussionBoardPost({ site }) {
  return (
    <form action={`/site/${site}/123`} style={{ display: "contents" }}>
      <button className={styles.post}>
        <div className={styles.nameID}>
          <div>name of person</div>
          <div>role tags</div>
        </div>
        <div className={styles.postTitle}>title of the post</div>
      </button>
    </form>
  );
}
