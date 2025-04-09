/*
 * TODO:
 * 1a. Add a list of posts for the site
 * 1b. display some error message if the site doesn't exist/is invalid
 * 2. Add a way to create a new post
 *  - this can maybe be through a separate page (eg. /:site/new)
 */

import DiscussionBoardPost from "@/app/components/DiscussionBoardPost";
import NewPostButton from "@/app/components/new-post-button";
import styles from "./page.module.css";

export default async function SitePage({ params }) {
  const p = params;
  const site = p.site;

  return (
    <div>
      <h1>Site: {site}</h1>
      <div className={styles.wholePage}>
        <div className={styles.sidebar}>
          <NewPostButton site={site} />
          <div className={styles.navButtons}>
            <button className={styles.navButton}>other site 1</button>
            <button className={styles.navButton}>other site 2</button>
            <button className={styles.navButton}>other site 3</button>
          </div>
        </div>
        <div className={styles.postList}>
          <DiscussionBoardPost site={site} />
          <DiscussionBoardPost site={site} />
          <DiscussionBoardPost site={site} />
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }) {
  const p = await params;
  return {
    title: `Site: ${p.site}`,
  };
}
