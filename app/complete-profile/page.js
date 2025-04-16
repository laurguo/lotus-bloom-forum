"use client";

import { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { updateUserName } from "../actions/role-actions";
import styles from "./CompleteProfile.module.css";

export default function CompleteProfile() {
  const { user, error: userError, isLoading } = useUser();
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setMessage("");

    try {
      const result = await updateUserName(name);

      if (result.success) {
        setMessage(result.message);
        // Refresh the page after a short delay
        setTimeout(() => {
          window.location.href = "/site-selection";
        }, 500);
      } else {
        setError(result.error);
      }
    } catch (err) {
      console.error("Error updating name:", err);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isLoading) {
    return (
      <div className={styles.profileContainer}>
        <div className={styles.profileCard}>
          <p>Loading user information...</p>
        </div>
      </div>
    );
  }

  if (userError) {
    return (
      <div className={styles.profileContainer}>
        <div className={styles.profileCard}>
          <p className={styles.errorMessage}>
            Error loading user information. Please try refreshing the page.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileCard}>
        <h1>Complete Your Profile</h1>
        <p>Welcome! Please enter your full name to complete your profile.</p>

        {error && <div className={styles.errorMessage}>{error}</div>}
        {message && <div className={styles.successMessage}>{message}</div>}

        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter your full name"
              disabled={isSubmitting}
              className={styles.inputField}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting || !name.trim()}
            className={styles.submitButton}
          >
            {isSubmitting ? "Updating..." : "Update Profile"}
          </button>
        </form>
      </div>
    </div>
  );
}
