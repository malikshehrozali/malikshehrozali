import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Hero from "@/components/common/Hero";
import Scroller from "@/components/common/Scroller";
import Contact from "@/sections/Contact";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import { Toaster } from "react-hot-toast";
import After from "@/sections/After";

const page = () => {
  return (
    <>
      <Toaster />
      <Scroller />
      <Header />
      <Hero />
      <Skills />
      <After />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default page;
