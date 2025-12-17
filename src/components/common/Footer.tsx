import Link from "next/link";
import React from "react";
import PakistansTime from "./PakistansTime";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="text-center h-[80vh] px-[10] w-full border-t-2 border-gray-500">
      <div className="flex flex-col items-center mt-10">
        <h2 className="text-gray-500 text-3xl">Malik Shehroz Ali</h2>
        <p className="text-gray-500 text-lg">
          Full Stack Developer | AI Engineer
        </p>
        <h4 className="text-[10vw]">Let's Start</h4>
        <div className="flex items-center flex-col md:flex-row flex-wrap justify-center gap-[5vw]">
          <p className="text-xl border-b-2 border-gray-500">
            malikshehrozali16@gmail.com
          </p>
          <Link
            href={"#"}
            className="px-5 py-3 hover:text-primary-orange text-xl hover:border-primary-orange transition-all duration-500 border-2 border-white rounded-full"
          >
            Get A Quote On Fiver
          </Link>
          <div className="text-center text-xl">
            <p className="text-2xl border-b-2 border-gray-500">Local Time</p>
            <PakistansTime />
          </div>
          <div className="flex flex-col items-center justify-center gap-3 text-xl">
            <p>+923064239458</p>
            <p>Feroz Wala | Gujranwala | Punjab | Pakistan</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="border-t-2 border-gray-500 mt-10 mb-10 flex gap-5 items-center justify-center w-1/2">
          <Link href={"https://github.com/malikshehrozali"} className="mt-10">
            <FaGithub className="hover:text-primary-orange" size={46} />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/malikshehrozali"}
            className="mt-10"
          >
            <FaLinkedin className="hover:text-primary-orange" size={46} />
          </Link>
          <Link
            href={"https://www.instagram.com/malikshehrozaliofficial/?hl=en"}
            className="mt-10"
          >
            <FaInstagram className="hover:text-primary-orange" size={46} />
          </Link>
          <Link
            href={"https://www.facebook.com/malikshehrozaliofficial"}
            className="mt-10"
          >
            <FaFacebook className="hover:text-primary-orange" size={46} />
          </Link>
          <Link
            href={"https://www.youtube.com/@malikshehrozaliofficial"}
            className="mt-10"
          >
            <FaYoutube className="hover:text-primary-orange" size={46} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
