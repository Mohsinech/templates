"use client";

import React, { useRef, useState } from "react";
import { animate, motion, AnimatePresence } from "framer-motion";
import styles from "./faqs.module.css";
import { faqs } from "./data";
import { Plus } from "lucide-react";

import { circOut } from "framer-motion";

const ease = circOut;

export default function Faqs() {
  const generalRef = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;
  const supportRef = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;
  const returnsRef = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      const stickyTop =
        document.querySelector(`.${styles.leftSticky}`)?.getBoundingClientRect()
          .top ?? 0;

      const targetTop = ref.current.getBoundingClientRect().top;

      let y = window.scrollY + targetTop - stickyTop;

      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      if (y > maxScroll) y = maxScroll;

      animate(window.scrollY, y, {
        duration: 0.8,
        ease,
        onUpdate: (val) => window.scrollTo(0, val),
      });
    }
  };

  const sectionRefs: React.RefObject<HTMLDivElement>[] = [
    generalRef,
    supportRef,
    returnsRef,
  ];

  return (
    <section className={styles.faqsSection}>
      {/* Left Sticky */}
      <div className={styles.leftSticky}>
        <p className={styles.subtitle}>FAQs</p>
        <h1 className={styles.title}>
          Vous avez des questions ? Nous avons les réponses. Parcourez nos FAQs
          pour des solutions rapides.
        </h1>
        <div className={styles.navLinks}>
          {["Général", "Support", "Livraison & Retours"].map((label, idx) => (
            <button key={idx} onClick={() => scrollTo(sectionRefs[idx])}>
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Right Content */}
      <div className={styles.rightContent}>
        {faqs.map((section, secIdx) => {
          const ref = sectionRefs[secIdx];
          return (
            <div key={secIdx} ref={ref} className="mb-10">
              <div className={styles.drop}>
                {section.items.map((item, idx) => {
                  const index = secIdx * 10 + idx;
                  const isOpen = openIndex === index;
                  return (
                    <div key={index} className={styles.faqItem}>
                      <div className={styles.flex}>
                        <button
                          onClick={() => toggle(index)}
                          className={styles.question}
                        >
                          {item.question}
                        </button>
                        <motion.span
                          className={styles.icon}
                          animate={{ rotate: isOpen ? 360 : 0 }}
                          transition={{ duration: 0.1, ease }}
                        >
                          <Plus className={`${styles.icon} `} />
                        </motion.span>
                      </div>

                      {/*  */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="content"
                            className={styles.answer}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.8, ease }}
                          >
                            <p>{item.answer}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
