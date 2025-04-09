"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [tocOpen, setTocOpen] = useState(false);

  const toggleTOC = () => {
    setTocOpen((prev) => !prev);
  };

  return (
    <div style={{ fontFamily: "var(--font-geist-sans)", position: "relative" }}>
      {/* HEADER */}
      <header style={styles.header}>
        <div style={styles.logoContainer}>
          <Image
            src="/LotusBloomLogo.png"
            alt="Lotus Bloom Logo"
            width={100}
            height={35}
            style={{ height: "auto" }}
          />
          <h1 style={styles.title}>Lotus Bloom</h1>
        </div>

        <div style={styles.menuIconContainer} onClick={toggleTOC}>
          <Image
            src="/menu-icon.png"
            alt="Menu"
            width={50}
            height={30}
            style={{ height: "auto" }}
          />
        </div>
      </header>

      <div style={styles.separator} />

      <div
        style={{
          ...styles.tocOverlay,
          pointerEvents: tocOpen ? "auto" : "none",
          opacity: tocOpen ? 1 : 0,
          transition: "opacity 0.3s ease-in-out",
        }}
        onClick={toggleTOC}
      >
        <div
          style={{
            ...styles.toc,
            transform: tocOpen ? "translateX(0%)" : "translateX(100%)",
            transition: "transform 0.3s ease-in-out",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <h2 style={styles.tocTitle}>Table of Contents</h2>
          <ul style={styles.tocList}>
            <li>
              <a href="#about-us" style={styles.tocLink} onClick={toggleTOC}>
                About Us...
              </a>
            </li>
            <li>
              <a href="#contact" style={styles.tocLink} onClick={toggleTOC}>
                Contact Us!
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

const styles = {
  header: {
    backgroundColor: "#C5A0C9",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0.6rem 1.5rem",
    width: "100%",
    position: "relative",
    zIndex: 1000,
  },
  separator: {
    height: "1px",
    backgroundColor: "#ffffff",
    width: "100%",
    position: "relative",
    zIndex: 1001,
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  title: {
    margin: 0,
    fontSize: "1.3rem",
    color: "#ffffff",
    letterSpacing: "0.15em",
  },
  menuIconContainer: {
    cursor: "pointer",
  },
  tocOverlay: {
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "flex-end",
    zIndex: 999,
  },
  toc: {
    backgroundColor: "#C5A0C9",
    width: "320px",
    padding: "2rem",
    paddingTop: "5rem",
    height: "100%",
    boxShadow: "-2px 0 5px rgba(0,0,0,0.3)",
    overflowY: "auto",
    transform: "translateX(100%)",
    color: "#fff",
  },
  tocTitle: {
    marginTop: 0,
  },
  tocList: {
    listStyle: "none",
    padding: 0,
  },
  tocLink: {
    textDecoration: "none",
    color: "#ffffff",
    fontSize: "1.2rem",
  },
};
