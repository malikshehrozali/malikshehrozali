"use client";
import { FaAngleDown } from "react-icons/fa6";

export default function ScrollDownButton({
    target = "#next-section",
    text = "Scroll Down • Scroll Down • Scroll Down • ",
}: {
    target?: string;
    text?: string;
}) {
    return (
        <a
            href={target}
            onClick={(e) => {
                e.preventDefault();
                document
                    .querySelector(target)
                    ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="relative flex items-center justify-center w-28 h-28 rounded-full text-primary-orange transition-all duration-300 group"
        >
            {/* Rotating circular text */}
            <div className="absolute flex items-center justify-center w-full h-full animate-spin-slow">
                <div className="relative w-full h-full flex items-center justify-center">
                    <p
                        className="absolute text-[0.65rem] font-semibold uppercase tracking-[0.25em]"
                        style={{
                            transform: "rotate(-90deg)", // start from top
                        }}
                    >
                        {Array.from(text).map((char, i) => (
                            <span
                                key={i}
                                style={{
                                    position: "absolute",
                                    left: "50%",
                                    top: "50%",
                                    transform: `rotate(${
                                        i * (360 / text.length)
                                    }deg) translateY(-54px)`,
                                    transformOrigin: "center",
                                }}
                            >
                                {char}
                            </span>
                        ))}
                    </p>
                </div>
            </div>

            {/* Center arrow */}
            <div className="z-10 flex items-center justify-center">
                <FaAngleDown
                    size={26}
                    strokeWidth={2}
                    className="transition-transform duration-300 group-hover:translate-y-1"
                />
            </div>

            {/* Optional glow */}
            <span className="absolute inset-0 rounded-full bg-primary-orange blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </a>
    );
}
