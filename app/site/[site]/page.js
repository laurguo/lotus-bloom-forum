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
  const p = await params;
  const site = p.site;

  return (
    <div>
      <div className={styles.wholePage}>
        <div className={styles.sidebar}>
          <h1 className={styles.h1}>General</h1>
          <NewPostButton site={site} />
          <div className={styles.navButtons}>
            <button className={styles.navButton}>
              San Antonio Family Resource Center
            </button>
            <button className={styles.navButton}>Lotus Bloom Downtown</button>
            <button className={styles.navButton}>
              Room to Bloom East Oakland
            </button>
            <button className={styles.navButton}>Family Navigation</button>
          </div>
        </div>
        <div className={styles.postList}>
          <DiscussionBoardPost
            site={site}
            user="Laura Guo"
            title="First post!"
          />
          <DiscussionBoardPost
            site={site}
            user="Azariah Smith"
            title="Hello World"
          />
          <DiscussionBoardPost
            site={site}
            user="Deven Mittal"
            title="Welcome to Lotus Blooms Forum"
          />
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
