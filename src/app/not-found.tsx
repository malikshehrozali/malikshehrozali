// app/not-found.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { FaGhost } from "react-icons/fa6";

export default function notFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white p-6 overflow-hidden relative">
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: [0, 1, 0],
              y: [-20, -60, -100],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            className="absolute w-1 h-1 bg-primary-orange rounded-full shadow-[0_0_10px_#ff7a00]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center relative z-10"
      >
        <FaGhost className="w-28 h-28 text-primary-orange mb-4 drop-shadow-[0_0_25px_#ff7a00]" />

        <h1 className="text-9xl font-extrabold text-primary-orange drop-shadow-[0_0_20px_#ff7a00]">
          404
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-300 mt-4 mb-8 text-center max-w-md"
        >
          Oops! The page you're looking for has vanished into the void.
        </motion.p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/"
            className="flex items-center gap-2 bg-primary-orange text-black px-6 py-3 rounded-2xl font-semibold shadow-[0_0_25px_#ff7a00]"
          >
            <FaArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
