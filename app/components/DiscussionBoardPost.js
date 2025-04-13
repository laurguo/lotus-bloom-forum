import styles from "./DiscussionBoardPost.module.css";

export default async function DiscussionBoardPost({ site, user, title }) {
  return (
    <form action={`/site/${site}/123`} style={{ display: "contents" }}>
      <button className={styles.postButton}>
        <div className={styles.nameID}>
          <div className={styles.username}>{user}</div>
          <div className={styles.roleTags}>ADMIN</div>
        </div>
        <div className={styles.postTitle}>{title}</div>
      </button>
    </form>
  );
}
