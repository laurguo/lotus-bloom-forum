import styles from "./page.module.css";
import LogoutButton from "../components/logout-button";
import Link from "next/link";
import LotusBloomHeader from "../components/header/LotusBloomHeader";

export default function SiteSelection() {
  return (
    <div>
      <LotusBloomHeader />
      <div className={styles.page}>
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
