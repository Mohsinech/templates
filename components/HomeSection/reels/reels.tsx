import React from "react";
import styles from "./reels.module.css";
import { reels } from "./data";

const Reels = () => {
  return (
    <section className={styles.reels}>
      <div className={styles.grid}>
        {reels.map((reel) => (
          <div className={styles.reel} key={reel.id}>
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              src={reel.src}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reels;
