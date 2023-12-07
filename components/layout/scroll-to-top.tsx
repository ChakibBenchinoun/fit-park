"use client";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { ArrowUp } from "lucide-react";
import React from "react";

const ScrollToTopButton = () => {
  const ref = React.useRef<HTMLAnchorElement>(null);
  const inView = useInView(ref);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div ref={ref} className="absolute top-0">
      <motion.a
        onClick={handleScrollToTop}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 0, y: 0 } : { opacity: 1, y: 20 }}
        href="#top"
        className={cn(
          "fixed bottom-10 right-10 z-10 transition-all duration-300 p-2 rounded-full bg-gray-700",
          inView ? "pointer-events-none" : ""
        )}
      >
        <ArrowUp className="w-10 h-10  text-yellow-700" />
      </motion.a>
    </div>
  );
};

export default ScrollToTopButton;
