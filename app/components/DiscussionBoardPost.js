"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import styles from "./DiscussionBoardPost.module.css";
import Spinner from "./Spinner";
import DeletePostButton from "./DeletePostButton";
import EditPostButton from "./EditPostButton";

export default function DiscussionBoardPost({
  site,
  name,
  title,
  roles,
  author_id,
  current_user_id,
  current_user_roles,
  post_id,
}) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const nonStandardRole = roles?.find((role) => role !== "Standard");
  const isCurrentUserAdmin = current_user_roles.includes("Admin");

  const handleClick = () => {
    startTransition(() => {
      router.push(`/site/${site}/${post_id}`);
    });
  };

  return (
    <div className={styles.postWrapper}>
      <button onClick={handleClick} className={styles.postButton}>
        <div className={styles.nameID}>
          <div className={styles.username}>{name}</div>
          {nonStandardRole && (
            <div className={styles.roleTags}>
              {nonStandardRole.toUpperCase()}
            </div>
          )}
        </div>
        <div className={styles.postTitle}>{title}</div>
        {isPending && (
          <div className={styles.spinnerWrapper}>
            <Spinner />
          </div>
        )}
      </button>

      {(isCurrentUserAdmin || current_user_id === author_id) && (
        <div className={styles.editdelete}>
          <DeletePostButton
            post_id={post_id}
            author_id={author_id}
            current_user_id={current_user_id}
            current_user_roles={current_user_roles}
          />
          <EditPostButton site={site} post_id={post_id} />
        </div>
      )}
    </div>
  );
}
