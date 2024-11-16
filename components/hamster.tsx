"use client";

import { motion } from "framer-motion";
import { CircleIcon } from "lucide-react";

interface HamsterProps {
  onClick: () => void;
}

export function Hamster({ onClick }: HamsterProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="cursor-pointer w-48 h-48 bg-amber-200 rounded-full flex items-center justify-center shadow-lg relative overflow-hidden"
      onClick={onClick}
    >
      <div className="absolute w-full h-full">
        <motion.div
          className="w-8 h-8 bg-amber-300 rounded-full absolute"
          style={{ top: "30%", left: "25%" }}
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="w-8 h-8 bg-amber-300 rounded-full absolute"
          style={{ top: "30%", right: "25%" }}
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      <motion.div
        className="w-32 h-32 bg-amber-100 rounded-full relative"
        animate={{
          y: [0, -2, 0],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="absolute w-3 h-3 bg-black rounded-full" style={{ top: "40%", left: "30%" }} />
        <div className="absolute w-3 h-3 bg-black rounded-full" style={{ top: "40%", right: "30%" }} />
        <div className="absolute w-4 h-4 bg-pink-300 rounded-full" style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
        <motion.div
          className="absolute w-8 h-4 bg-amber-300 rounded-full"
          style={{ bottom: "20%", left: "50%", transform: "translateX(-50%)" }}
          animate={{
            scaleX: [1, 1.2, 1],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </motion.div>
  );
}