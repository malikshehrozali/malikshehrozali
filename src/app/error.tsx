// app/error.tsx
"use client";

import { motion } from "framer-motion";
import { FiAlertTriangle, FiRotateCcw } from "react-icons/fi";

type ErrorProps = { error: Error; reset: () => void };

export default function ErrorPage({ error, reset }: ErrorProps) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <FiAlertTriangle className="w-24 h-24 text-primary-orange mb-6" />

        <h1 className="text-5xl font-extrabold text-primary-orange text-center mb-4">
          Something Went Wrong
        </h1>

        <p className="text-gray-300 text-center max-w-md mb-8 text-lg">
          {error?.message || "An unexpected error occurred. Please try again."}
        </p>

        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          onClick={reset}
          className="flex items-center gap-2 bg-primary-orange text-black px-8 py-3 rounded-2xl font-semibold shadow-[0_0_20px_rgba(255,140,0,0.6)]"
        >
          <FiRotateCcw className="w-5 h-5" />
          Retry
        </motion.button>
      </motion.div>
    </div>
  );
}
