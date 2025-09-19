import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer} id="footer">
      <h1>Ayour—Luxe</h1>

      {/* footer content */}
      <div className={styles.content}>
        <p>&copy; 2025 Édition</p>
        <p>
          {" "}
          <Link
            href="https://www.instagram.com/milcodestudio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vous voulez ce modèle ? <u>milcode studio</u>
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
