import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      {/* Large Screen Menus */}
      <div className="lg:flex items-center justify-between px-15 hidden h-[8vh] w-full backdrop-blur-md fixed z-15 ">
        <div className="">
          <Link href={"/"}>
            <h1 className="flex leading-[20vw] items-center gap-1 text-3xl justify-center font-medium">
              Malik Shehroz
              <span className="font-[script] font-normal text-primary-orange">
                Ali
              </span>
            </h1>
          </Link>
        </div>
        <div className="flex items-center justify-between gap-2 flex-col mt-40">
          <Link
            href={"#about"}
            className="hover:bg-white/10 rounded-2xl hover:border transition-all duration-500 border-white/50 px-4 py-2"
          >
            About
          </Link>
          <Link
            href={"#skills"}
            className="hover:bg-white/10 rounded-2xl hover:border transition-all duration-500 border-white/50 px-4 py-2"
          >
            Skills
          </Link>
          <Link
            href={"#projects"}
            className="hover:bg-white/10 rounded-2xl hover:border transition-all duration-500 border-white/50 px-4 py-2"
          >
            Projects
          </Link>
          <Link
            href={"#contact"}
            className="hover:bg-white/10 rounded-2xl hover:border transition-all duration-500 border-white/50 px-4 py-2"
          >
            Contact
          </Link>
        </div>
      </div>
      {/* for smaller screens */}
      <div className="flex items-center justify-between px-3 md:px-5 h-[8vh] lg:hidden fixed w-full backdrop-blur-md z-15">
        <div>
          <Link href={"/"}>
            <h1 className="flex leading-[20vw] items-center gap-1 text-lg md:text-2xl justify-center font-medium">
              Malik Shehroz
              <span className="font-[script] font-normal">Ali</span>
            </h1>
          </Link>
        </div>
        <div className="flex items-center justify-between gap-4">
          <Link
            href={"#about"}
            className="hover:bg-white/10 rounded-2xl hover:border transition-all duration-500 border-white/50 "
          >
            About
          </Link>
          <Link
            href={"#projects"}
            className="hover:bg-white/10 rounded-2xl hover:border transition-all duration-500 border-white/50"
          >
            Projects
          </Link>
          <Link
            href={"#contact"}
            className="hover:bg-white/10 rounded-2xl hover:border transition-all duration-500 border-white/50 "
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
