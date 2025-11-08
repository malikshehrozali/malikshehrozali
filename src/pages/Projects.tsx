"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const Projects = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Transform scroll progress to horizontal movement
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

    return (
        <div
            ref={containerRef}
            className="relative h-[400vh] bg-black"
            id="projects"
        >
            {/* Sticky container */}
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
                {/* Animated content */}
                <motion.div
                    style={{ x }}
                    className="flex items-center whitespace-nowrap text-[80vw] sm:text-[30vw] md:text-[30vw] lg:text-[23vw] xl:text-[18vw] 2xl:text-[9vw] font-extrabold leading-none tracking-tight px-[10vw]"
                >
                    <span className="text-primary-orange">My</span>
                    <Image
                        src="/projects/aicm.png"
                        width={300}
                        height={300}
                        alt="aicm"
                        className="inline-block mx-[5vw] w-[25vw] h-auto object-cover rounded-2xl shadow-2xl"
                    />
                    <span className="text-primary-orange">Projects</span>
                    <Image
                        src="/projects/case-cobra.png"
                        width={300}
                        height={300}
                        alt="case cobra"
                        className="inline-block mx-[5vw] w-[25vw] h-auto object-cover rounded-2xl shadow-2xl"
                    />
                    <span className="text-primary-orange">are</span>
                    <Image
                        src="/projects/deepseek.png"
                        width={300}
                        height={300}
                        alt="deepseek"
                        className="inline-block mx-[5vw] w-[25vw] h-auto object-cover rounded-2xl shadow-2xl"
                    />
                    <span className="text-primary-orange">more</span>
                    <Image
                        src="/projects/forever.png"
                        width={300}
                        height={300}
                        alt="forever"
                        className="inline-block mx-[5vw] w-[25vw] h-auto object-cover rounded-2xl shadow-2xl"
                    />
                    <span className="text-primary-orange">than</span>
                    <Image
                        src="/projects/k72.png"
                        width={300}
                        height={300}
                        alt="k72"
                        className="inline-block mx-[5vw] w-[25vw] h-auto object-cover rounded-2xl shadow-2xl"
                    />
                    <span className="text-primary-orange">just</span>
                    <Image
                        src="/projects/myflix.png"
                        width={300}
                        height={300}
                        alt="forever"
                        className="inline-block mx-[5vw] w-[25vw] h-auto object-cover rounded-2xl shadow-2xl"
                    />
                    <span className="text-primary-orange">code.</span>
                    <Image
                        src="/projects/patch.png"
                        width={300}
                        height={300}
                        alt="patch"
                        className="inline-block mx-[5vw] w-[25vw] h-auto object-cover rounded-2xl shadow-2xl"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Projects;
