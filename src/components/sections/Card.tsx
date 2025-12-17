import { motion } from "framer-motion";
import React from "react";

// Update CardProps interface to accept a more general ref type (HTMLElement)
interface CardProps {
  style?: React.CSSProperties;
  text?: string | null;
  containerRef: React.RefObject<HTMLElement>; // Change this to HTMLElement
}

const Card: React.FC<CardProps> = ({ style, text, containerRef }) => {
  return (
    <motion.div
      className="absolute px-1 py-4 text-xl text-center rounded-full ring ring-gray-700 font-extralight bg-primary-orange w-48 cursor-grab"
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
    >
      {text}
    </motion.div>
  );
};

export default Card;
