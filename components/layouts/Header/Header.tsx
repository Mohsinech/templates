"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./header.module.css";
import { Links, TabLinks } from "./data";
import { useLenis } from "@/hooks/useLenis";
import Link from "next/link";
import usePreloader from "@/hooks/usePreloader";

const Header = () => {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  );

  // Clock update
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Use Lenis
  const lenisRef = useLenis({ duration: 1.2 });

  // Smooth scroll using Lenis
  const scrollTo = (target: string) => {
    const lenis = lenisRef?.current;
    if (!lenis) return;

    const element = document.querySelector(target) as HTMLElement | null;
    if (element) {
      lenis.scrollTo(element, { offset: 0 });
    }
  };

  //
  const loading = usePreloader();

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={!loading ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: [0.65, 0.05, 0, 1] }}
        className={styles.header}
      >
        {/* NAVIGATION */}
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            {Links.map((link) => (
              <li key={link.id}>
                <button
                  className={styles.a}
                  onClick={() => link.path && scrollTo(link.path)}
                >
                  {link.title}
                </button>
              </li>
            ))}
            <li className={styles.insta}>
              <Link
                href="https://www.instagram.com/ayour_luxe1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </Link>
            </li>
          </ul>
        </nav>

        {/* LOGO */}
        <Link href="/" className={styles.logo}>
          <h1>Ayourluxe</h1>
        </Link>

        {/* Order Time */}
        <div className={styles.time}>
          <h1>[ {time} ]</h1>
        </div>
      </motion.header>

      {/* Tab Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className={styles.Tabheader}
      >
        {/* NAVIGATION */}
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            {TabLinks.map((link) => (
              <li key={link.id}>
                <button
                  className={styles.a}
                  onClick={() => link.path && scrollTo(link.path)}
                >
                  {link.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* LOGO */}
        <Link href="/" className={styles.logo}>
          <h1>skinvolve</h1>
        </Link>

        {/* Order Time */}
        <div className={styles.time}>
          <h1>[ {time} ]</h1>
        </div>
      </motion.header>

      {/* Mobile Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className={styles.Mobheader}
      >
        {/* LOGO */}
        <Link href="/" className={styles.logo}>
          <h1>skinvolve</h1>
        </Link>

        {/* Order Time */}
        <div className={styles.time}>
          <h1>[ {time} ]</h1>
        </div>
      </motion.header>
    </>
  );
};

export default Header;
