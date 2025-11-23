// app/loading.tsx
"use client";
import { motion } from "framer-motion";
import { FiLoader } from "react-icons/fi";

export default function Loading() {
  return (
    <div className="h-screen flex items-center justify-center bg-black text-primary-orange relative overflow-hidden">
      {/* Animated Gradient Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }}
        className="absolute w-[500px] h-[500px] bg-primary-orange/20 blur-[120px] rounded-full"
      />

      {/* Center Loader */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col items-center z-10"
      >
        <FiLoader className="w-20 h-20 animate-spin drop-shadow-[0_0_20px_#ff7a00] text-primary-orange" />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-lg font-medium tracking-wide text-primary-orange drop-shadow-[0_0_12px_#ff7a00]"
        >
          Loading your portfolio...
        </motion.p>
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: [0, 1, 0],
              y: [-20, -80, -150],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            className="absolute w-1.5 h-1.5 bg-primary-orange rounded-full shadow-[0_0_12px_#ff7a00]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
