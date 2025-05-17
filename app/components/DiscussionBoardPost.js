import styles from "./DiscussionBoardPost.module.css";
import DeletePostButton from "./DeletePostButton";
import EditPostButton from "./EditPostButton";
import Link from "next/link";

export default function DiscussionBoardPost({
  site,
  name,
  title,
  roles,
  post_id,
}) {
  const nonStandardRole = roles?.find((role) => role !== "Standard");

  return (
    <div className={styles.postWrapper}>
      <Link href={`/site/${site}/${post_id}`} className={styles.postButton}>
        <div className={styles.nameID}>
          <div className={styles.username}>{name}</div>
          {nonStandardRole && (
            <div className={styles.roleTags}>
              {nonStandardRole.toUpperCase()}
            </div>
          )}
        </div>
        <div className={styles.postTitle}>{title}</div>
      </Link>
      <div className={styles.editdelete}>
        <DeletePostButton post_id={post_id} />
        <EditPostButton site={site} post_id={post_id} />
      </div>
    </div>
  );
}
