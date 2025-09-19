// components/Preloader.tsx
"use client";
import { motion, AnimatePresence } from "framer-motion";
import usePreloader from "@/hooks/usePreloader";

const Preloader = () => {
  const loading = usePreloader();

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 flex items-center justify-center bg-white z-[9999]"
        ></motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
