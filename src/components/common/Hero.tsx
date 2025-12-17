"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ScrollDownButton from "./ScrollDownButton";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const size = isHovered ? 450 : 30;
  useEffect(() => {
    const setFormEvent = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", setFormEvent);
    return () => window.removeEventListener("mousemove", setFormEvent);
  });

  return (
    <div className="h-screen w-full relative">
      <div
        className="flex h-full w-full items-center justify-center overflow-hidden "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="h-screen w-full relative"
          animate={{
            "--maskX": `${mousePosition.x - size / 2}px`,
            "--maskY": `${mousePosition.y - size / 2}px`,
            "--maskSize": `${size}px`,
          }}
        >
          <Image
            src={"/main-testing.jpg"}
            alt="photo of malik shehroz ali"
            width={1200}
            height={1200}
            className="w-full h-screen absolute normal opacity-85 object-cover"
            priority={true}
          />
          <Image
            src={"/background.jpg"}
            alt="photo of malik shehroz ali"
            className="w-full h-screen absolute mask object-cover"
            width={1200}
            height={1200}
            priority={true}
          />
        </motion.div>
        <div className="w-full h-screen  flex items-center justify-center bg-linear-to-b from-50% from-transparent to-black/90 absolute bottom-0">
          <div className="absolute lg:bottom-40 bottom-4 border-2 border-primary-orange w-[80vw] rounded-full"></div>
          <p className="absolute bottom-15 text-white left-20 hidden lg:block text-2xl font-semibold">
            Full Stack Developer
          </p>
          <div className="absolute lg:bottom-50 bottom-30 z-15">
            <ScrollDownButton target="#skills" text="view more! | view more!" />
          </div>
          <h3 className="absolute lg:bottom-5 bottom-0 lg:w-1/4 text-center p-5 text-lg ">
            I build end-to-end digital experiences powered by modern web
            technologies and artificial intelligence.
          </h3>
          <p className="absolute bottom-15 text-white right-20 hidden lg:block text-2xl font-semibold">
            AI Engineer
          </p>
        </div>
        <div className="h-full text-center w-full flex items-center justify-center text-white absolute z-10 p-5">
          <h2 className="text-5xl font-black lg:w-1/3 ">
            Transforming Ideas into Scalable, Smart Products{" "}
            <span className="hidden lg:block">
              {" "}
              Where Code{" "}
              <span className="font-[script] font-medium text-primary-orange">
                {" "}
                Thinks
              </span>{" "}
              and{" "}
              <span className="font-[script] font-medium text-primary-orange">
                {" "}
                Ideas
              </span>{" "}
              Scale.
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
