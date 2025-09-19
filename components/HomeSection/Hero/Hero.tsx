"use client";

import React from "react";
import styles from "./hero.module.css";
import { motion } from "framer-motion";
import usePreloader from "@/hooks/usePreloader";

const Hero = () => {
  //
  const loading = usePreloader();

  return (
    <section className={styles.hero}>
      <motion.div
        initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
        animate={
          !loading
            ? { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }
            : {}
        }
        transition={{ duration: 1.5, ease: [0.65, 0.05, 0, 1] }}
        className={styles.wrapper}
      ></motion.div>
    </section>
  );
};

export default Hero;
