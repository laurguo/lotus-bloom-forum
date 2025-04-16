"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";
import styles from "./page.module.css";
import LogoutButton from "../components/logout-button";
import Link from "next/link";
import { getCurrentUser } from "../actions/role-actions";

export default function SiteSelection() {
  const router = useRouter();
  const { isLoading } = useUser();
  const [isChecking, setIsChecking] = useState(true);
  const [error, setError] = useState("");
  const userName = useRef(null);

  useEffect(() => {
    async function checkProfileCompletion() {
      try {
        if (isLoading) return;

        setIsChecking(true);

        const { success, user, error } = await getCurrentUser();

        if (!success) {
          console.error("Failed to get current user:", error);
          setError("Error verifying profile status");
          setIsChecking(false);
          return;
        }

        // Check if name matches email (indicating incomplete profile)
        const nameMatchesEmail = user.name === user.email;

        if (nameMatchesEmail) {
          // Redirect to profile completion page if name matches email
          console.log("Redirecting to complete profile");
          router.push("/complete-profile");
        } else {
          userName.current = user.name;
          setIsChecking(false);
        }
      } catch (err) {
        console.error("Error checking profile:", err);
        setError("An error occurred while checking your profile");
        setIsChecking(false);
      }
    }

    checkProfileCompletion();
  }, [isLoading, router]);

  if (isLoading || isChecking) {
    return (
      <div className={styles.page}>
        <div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.page}>
        <div>
          <h2>Something went wrong</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className={styles.page}>
        {userName.current && <p>Welcome, {userName.current}!</p>}
        <h1 className={styles.title}>Select a Site!</h1>
        <div className={styles.selectionGrid}>
          <Link href="/site/san-antonio-family-resource-center">
            <div className={styles.site}>
              <div className={styles.siteTitle}>
                San Antonio Family Resource Center
              </div>
              <p className={styles.siteDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </Link>
          <Link href="/site/lotus-bloom-downtown">
            <div className={styles.site}>
              <div className={styles.siteTitle}>Lotus Bloom Downtown</div>
              <p className={styles.siteDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </Link>
          <Link href="/site/room-to-bloom-east-oakland">
            <div className={styles.site}>
              <div className={styles.siteTitle}>Room to Bloom East Oakland</div>
              <p className={styles.siteDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </Link>
          <Link href="/site/lotus-bloom-general">
            <div className={styles.site}>
              <div className={styles.siteTitle}>Lotus Bloom General</div>
              <p className={styles.siteDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </Link>
          <Link href="/site/family-navigation">
            <div className={styles.site}>
              <div className={styles.siteTitle}>Family Navigation</div>
              <p className={styles.siteDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </Link>
        </div>
        <LogoutButton />
      </div>
    </div>
  );
}
