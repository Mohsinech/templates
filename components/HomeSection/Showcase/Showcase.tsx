"use client";
import React, { useEffect, useState, useRef } from "react";
import styles from "./showcase.module.css";
import Image from "next/image";

const Showcase = () => {
  const [offsetY, setOffsetY] = useState(0);
  const showcaseRef = useRef<HTMLElement | null>(null);

  const handleScroll = () => {
    if (!showcaseRef.current) return;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    // distance from the top of page to the showcase section
    const sectionOffsetTop = showcaseRef.current.offsetTop;

    // current scroll relative to the showcase section
    const relativeY = scrollTop - sectionOffsetTop;

    setOffsetY(relativeY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={showcaseRef}
      className={styles.showcase}
      style={{ overflow: "hidden", position: "relative" }}
    >
      <div
        style={{
          transform: `translateY(${offsetY * 0.2}px)`,
          transition: "transform 0.1s linear",
          willChange: "transform",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <Image
          src="/assets/images/showcase.jpg"
          alt="Showcase"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
};

export default Showcase;
