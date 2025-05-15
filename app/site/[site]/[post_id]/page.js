import Image from "next/image";
import styles from "./page.module.css";
import CommentTab from "@/app/components/CommentTab";
import { getPostById, getComments } from "@/app/actions/db-actions";
import { getUserDetails } from "@/app/actions/role-actions";

export default async function PostPage({ params }) {
  const p = await params;
  const site = p.site;
  const post_id = p.post_id;

  const post = await getPostById(post_id);
  if (!post) {
    return <p>Post not found.</p>;
  }

  const { name: authorName, roles: authorRoles } = await getUserDetails(
    post.author_id,
  );
  const nonStandardRole = authorRoles?.find((role) => role !== "Standard");

  const createdAt = new Date(post.created_at).toLocaleDateString();

  const comments = await getComments(post_id);
  const commentsWithName = await Promise.all(
    comments.map(async (comment) => {
      const { name: userName, roles: userRoles } = await getUserDetails(
        post.author_id,
      );
      return { ...comment, userName, userRoles };
    }),
  );

  return (
    <div>
      <div className={styles.pageContainer}>
        <div className={styles.links}>
          <div className={styles.backButton}>
            <a className={styles.backParent} href={`/site/${site}`}>
              <Image src={"/back2.svg"} alt="Back" width={40} height={40} />
              <h1>Back</h1>
            </a>
          </div>
        </div>

        <div className={styles.flexContainer}>
          <div className={styles.textbox}>
            <div className={styles.userTag}>
              <h1>{post.title}</h1>

              <div className={styles.userProfile}>
                <Image
                  src={"/default_profile.svg"}
                  alt="Back"
                  width={40}
                  height={40}
                />
                <div className={styles.userBox}>
                  <h1>{authorName} </h1>
                  {nonStandardRole && (
                    <div className={styles.roleTags}>
                      {nonStandardRole.toUpperCase()}
                    </div>
                  )}
                  <h2>{createdAt} </h2>
                </div>
              </div>
            </div>
            <p>{post.body}</p>
          </div>

          <CommentTab comments={commentsWithName} postid={post_id} />
        </div>
      </div>
    </div>
  );
}

// This is needed for the page to receive the params prop
export async function generateMetadata({ params }) {
  const p = await params;
  return {
    title: `Post ID: ${p.post_id} on ${p.site}`,
  };
}
