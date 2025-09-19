"use client";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import styles from "./marquee.module.css";
import Link from "next/link";

const MARQUEE_SPEED = 1.5;

const Marquee = () => {
  const x = useMotionValue(0);
  const direction = useRef<"ltr" | "rtl">("rtl");
  const trackRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef<number>(0);

  // Handle scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        direction.current = "ltr";
      } else if (currentScrollY < lastScrollY.current) {
        direction.current = "rtl";
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useAnimationFrame(() => {
    const trackWidth = trackRef.current?.scrollWidth
      ? trackRef.current.scrollWidth / 2
      : 0;
    let next =
      x.get() + (direction.current === "ltr" ? MARQUEE_SPEED : -MARQUEE_SPEED);
    if (Math.abs(next) >= trackWidth) {
      next = 0;
    }
    x.set(next);
  });

  return (
    <section className={styles.wrapper}>
      <motion.div className={styles.track} ref={trackRef} style={{ x }}>
        <Link
          href="https://www.instagram.com/ayour_luxe1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Suivez-nous</span>
          <span>Suivez-nous</span>
          <span>Suivez-nous</span>
          <span>Suivez-nous</span>
          <span>Suivez-nous</span>
          <span>Suivez-nous</span>
          <span>Suivez-nous</span>
          <span>Suivez-nous</span> {/* Duplicate for seamless loop */}
          <span>Suivez-nous</span>
          <span>Suivez-nous</span>
          <span>Suivez-nous</span>
          <span>Suivez-nous</span>
          <span>Suivez-nous</span>
          <span>Suivez-nous</span>
          <span>Suivez-nous</span>
          <span>Suivez-nous</span>{" "}
        </Link>
      </motion.div>
    </section>
  );
};

export default Marquee;
