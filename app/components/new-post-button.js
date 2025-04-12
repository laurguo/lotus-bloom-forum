import styles from "./buttons.module.css";

export default function NewPostButton({ site }) {
  return (
    <div>
      <form action={`/site/${site}/new`}>
        <button className={styles.newPostButton} type="submit">
          New Post
        </button>
      </form>
    </div>
  );
}
