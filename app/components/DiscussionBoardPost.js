import styles from "./DiscussionBoardPost.module.css";

export default function DiscussionBoardPost() {
  return (
    <div className={styles.post}>
      <div>this is the profile pic</div>
      <div>
        <div>
          <span>name of person</span>
          <div>role tags</div>
        </div>
        <div>shortened content of the post</div>
      </div>
      <div>any images go here</div>
    </div>
  );
}
