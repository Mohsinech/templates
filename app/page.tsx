"use client";

import React from "react";
import styles from "./app.module.css";
import {
  Faqs,
  Hero,
  Marquee,
  Products,
  Reels,
  Showcase,
  Testimonials,
} from "@/components/HomeSection";
import { useLenis } from "@/hooks/useLenis";
import { motion } from "framer-motion";

export default function Home() {
  //
  useLenis();

  return (
    <main className={styles.main}>
      <Hero />
      <section className={styles.idea}>
        <div className={styles.fst}>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className={styles.subtitle}
            >
              Nous vous proposons les meilleurs{" "}
            </motion.h2>
          </div>
        </div>

        {/*  */}
        <div className={styles.snd}>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.65, 0.05, 0, 1] }}
            >
              bijoux &
            </motion.h1>
          </div>{" "}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: [0.65, 0.05, 0, 1],
                delay: 0.1,
              }}
            >
              collections
            </motion.h1>
          </div>
        </div>
      </section>
      <Products />
      <Showcase />
      <Marquee />
      <Reels />
      <Faqs />
      <Testimonials />
    </main>
  );
}
