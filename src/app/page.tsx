import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Scroller from "@/components/Scroller";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Projects from "@/pages/Projects";
import Skills from "@/pages/Skills";

const page = () => {
    return (
        <>
            <Scroller />
            <Header />
            <Hero />
            <Skills />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </>
    );
};

export default page;
