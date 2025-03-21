/*
 * TODO:
 * 1a. Display a list of comments for the post
 * 1b. Display some error message if the post_id doesn't exist/is invalid (just hardcode valid/invalid post_ids for now)
 * 2a. Add a way to create a new comment
 * 2b. Add a way to delete and edit a comment
 * 2c. Add a way to delete and edit a post (only for a user who made the post (worry about the functionality of this later once we do backend))
 */
import React from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default async function PostPage({ params }) {
  const p = await params;
  const site = p.site;
  const post_id = p.post_id;

  return (
    <div className={styles.pageContainer}>
      <div className={styles.back_button}>
        <Image src={"/back_button.svg"} alt="Back" width={40} height={40} />
        <h1>Back</h1>
      </div>

      <div className={styles.flexContainer}>
        <div className={styles.userTag}>
          <Image
            src={"/default_profile.svg"}
            alt="Back"
            width={40}
            height={40}
          />
          <h1>Deven Mital </h1>
          <h2> March 1, 2025 </h2>
        </div>

        <div className={styles.Textbox}>
          <h1>Welcome to Lotus Bloom's Website</h1>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <img src={"random image"} />
        </div>

        <div className={styles.comments}>
          <div id={styles.box1}>
            <p>Comment box 1</p>
          </div>
          <div id={styles.box2}>
            <p>Comment box 2</p>
          </div>
          <div id={styles.box3}>
            <p>Comment box 3</p>
          </div>
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
