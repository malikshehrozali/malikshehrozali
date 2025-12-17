"use client";
import React, { useRef } from "react";
import Logo from "./Logo";
import { usePathname, useRouter } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();
  const parentRef = useRef<HTMLDivElement>(null);
  const logoContainerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<SVGSVGElement>(null);
  const childRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

    // Initial states
    gsap.set(logoContainerRef.current, { opacity: 0, display: "none" });
    gsap.set(parentRef.current, { display: "block" });
    gsap.set(childRef.current, { display: "none" });
    gsap.set(".logo-outline", {
      strokeDasharray: 2500,
      strokeDashoffset: 2500,
      opacity: 1,
    });
    // 1️⃣ Background pieces come up
    tl.from(".stairs", {
      height: 0,
      duration: 1,
      stagger: { amount: 0.5 },
    });
    // 2️⃣ Logo outline draws
    tl.to(".forZ", {
      zIndex: 15,
    });
    tl.to(".logo-outline", {
      strokeDashoffset: 0,
      duration: 1.2,
      ease: "power2.out",
    });

    tl.to(logoContainerRef.current, {
      display: "block",
      opacity: 1,
    });
    // 3️⃣ Logo fades in
    tl.to(logoRef.current, {
      opacity: 1,
      duration: 0.8,
    });

    // 4️⃣ Outline fades out
    tl.to(".logo-outline", {
      opacity: 0,
      duration: 0.5,
    });
    tl.to(logoContainerRef.current, {
      display: "none",
      opacity: 0,
      duration: 1,
    });
    // 5️⃣ Panels move down to reveal the page
    tl.to(".stairs", {
      y: "100%",
      stagger: { amount: -0.5 },
      duration: 1,
    });

    // 6️⃣ Hide overlay container
    tl.to(parentRef.current, {
      opacity: 0,
      duration: 0.5,
      display: "none",
    });
    tl.to(
      childRef.current,
      {
        opacity: 1,
        display: "block",
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.3"
    );
  }, [pathname, router]);

  return (
    <>
      <div>
        <div
          className="relative h-screen w-full flex justify-center items-center overflow-hidden bg-primary-orange"
          ref={parentRef}
        >
          <div className="absolute inset-0 flex z-10">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="h-full w-[5%] bg-black stairs"></div>
            ))}
          </div>
          {/* Centered Logo */}
          <div className="absolute inset-0 flex items-center justify-center forZ">
            {/* Logo Outline Animation */}
            <svg
              className="absolute logo-outline"
              width="370"
              height="400"
              viewBox="0 0 433 403"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="white"
              strokeWidth="4"
            >
              <path d="M60 280.015V373C60 389.569 46.5685 403 30 403C13.4315 403 0 389.569 0 373V46.3858C0 46.0227 0 45.8412 0.00102513 45.6877C0.169023 20.5256 20.5256 0.169023 45.6877 0.00102513C45.8412 0 46.0227 0 46.3857 0C46.6071 0 46.7177 0 46.8211 0.000465013C63.2821 0.0744858 78.4486 8.93987 86.5899 23.2469C86.6404 23.3355 86.6939 23.4305 86.7994 23.618L86.804 23.626L154.512 143.865C175.925 181.892 186.631 200.905 200.918 207.045C212.329 211.949 225.239 212.03 236.71 207.268C251.073 201.307 262.016 182.429 283.901 144.673L355.894 20.4745C363.24 7.80144 376.78 0 391.428 0C414.111 0 432.5 18.3885 432.5 41.072V305.661C432.5 323.538 418.008 338.03 400.131 338.03C382.254 338.03 367.762 323.538 367.762 305.661V283.396C367.762 258.113 367.762 245.472 366.379 239.96C357.602 204.983 313.82 193.252 288.73 219.154C284.776 223.236 278.456 234.184 265.814 256.079C259.314 267.338 256.064 272.968 253.07 276.379C234.751 297.254 202.249 297.254 183.93 276.379C180.936 272.968 177.686 267.339 171.186 256.08L171.186 256.079L168.258 251.008L168.257 251.007C150.656 220.52 141.855 205.277 135.805 200.128C111.285 179.261 73.4659 189.394 62.6652 219.725C60 227.21 60 244.812 60 280.015Z" />
            </svg>

            {/* Filled Logo */}
            <div ref={logoContainerRef}>
              <Logo ref={logoRef} />
            </div>
          </div>
        </div>

        {/* Page content */}
        <div ref={childRef}>{children}</div>
      </div>
    </>
  );
};

export default PageTransition;
