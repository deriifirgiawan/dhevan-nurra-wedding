"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactNode, useEffect } from "react";

interface FullpageSectionProps {
  children: ReactNode;
  className?: string;
}

export const FullpageSection: React.FC<FullpageSectionProps> = ({
  children,
  className,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.4,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`w-full min-h-screen flex flex-col justify-center items-center ${
        className ?? ""
      }`}
    >
      {children}
    </motion.div>
  );
};
