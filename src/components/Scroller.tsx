"use client";
import { motion, useScroll, useSpring } from "framer-motion";

const Scroller = () => {
    const { scrollYProgress } = useScroll();

    // Smooth spring animation
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 30,
        restDelta: 0.001,
    });
    return (
        <div className="fixed top-[20%] right-6 h-[50vh] w-1 z-50 flex justify-center">
            <motion.div
                className="relative w-1 bg-linear-to-b from-primary-orange to-white rounded-full before:content-[''] after:content-[''] before:absolute after:absolute before:left-1/2 after:left-1/2"
                style={{
                    scaleY,
                    originY: 0,
                }}
            >
                {/* Needle top */}
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-linear-to-b from-transparent to-primary-orange rounded-full"></div>
                {/* Needle bottom */}
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-linear-to-t from-transparent to-white rounded-full"></div>
            </motion.div>
        </div>
    );
};

export default Scroller;
