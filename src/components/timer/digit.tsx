import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DigitProps {
  value: number;
}

export const Digit: React.FC<DigitProps> = ({ value }) => {
  return (
    <div className="relative h-8 w-10 flex items-center justify-center overflow-hidden bg-red-700 rounded-lg shadow-inner ">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={value}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="absolute text-sm md:text-sm font-bold mono text-white"
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};
