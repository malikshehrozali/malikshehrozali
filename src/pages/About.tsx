import React from "react";

const About = () => {
    return (
        <div id="about" className="h-screen w-full bg-[#969696] overflow-hidden">
            <div className="relative h-full w-full">
                <div className="absolute flex items-center justify-center w-[10vw] bg-black h-[30vh] top-0 left-0 ">
                    <p className="rotate-90 uppercase text-4xl text-nowrap">
                        Since 2024
                    </p>
                </div>
                <div className="absolute w-[30vw] flex items-center justify-center bg-black h-[10vh] bottom-0 right-0">
                    <p className="uppercase text-3xl text-nowrap">Member</p>
                </div>
                <div className="w-full h-full overflow-hidden relative flex flex-col gap-2">
                    <h4 className="text-[15vw] text-nowrap borderText lg:leading-60">
                        Malik Shehroz Ali
                    </h4>
                    <h4 className="text-[15vw] text-nowrap borderText lg:leading-60">
                        Malik Shehroz Ali
                    </h4>
                    <h4 className="text-[15vw] text-nowrap borderText lg:leading-60">
                        Malik Shehroz Ali
                    </h4>
                    <h4 className="text-[15vw] text-nowrap borderText lg:leading-60">
                        Malik Shehroz Ali
                    </h4>
                    <h4 className="text-[15vw] text-nowrap borderText lg:leading-60">
                        Malik Shehroz Ali
                    </h4>
                    <h4 className="text-[15vw] text-nowrap borderText lg:leading-60">
                        Malik Shehroz Ali
                    </h4>
                    <h4 className="text-[15vw] text-nowrap borderText lg:leading-60">
                        Malik Shehroz Ali
                    </h4>
                    <h4 className="text-[15vw] text-nowrap borderText lg:leading-60">
                        Malik Shehroz Ali
                    </h4>
                    <h4 className="text-[15vw] text-nowrap borderText lg:leading-60">
                        Malik Shehroz Ali
                    </h4>
                    <h4 className="text-[15vw] text-nowrap borderText lg:leading-60">
                        Malik Shehroz Ali
                    </h4>
                    <h4 className="text-[15vw] text-nowrap borderText lg:leading-60">
                        Malik Shehroz Ali
                    </h4>
                    <h4 className="text-[15vw] text-nowrap borderText lg:leading-60">
                        Malik Shehroz Ali
                    </h4>
                </div>
                <div className="text-center p-5 h-[50vh] top-[30%] w-full bg-black absolute flex items-center flex-col lg:gap-10 ">
                    <h2 className="text-4xl lg:text-6xl font-bold pb-5">
                        About Me
                    </h2>
                    <p className="w-full h-full text-wrap tracking-wide overflow-y-auto lg:w-1/2">
                        I’m Malik Shehroz Ali, a Full Stack Developer and AI
                        Engineer passionate about building intelligent,
                        scalable, and user-focused digital experiences. I am
                        learning Becholer Of Artificial Intelligence. <br></br>{" "}
                        <br></br>My work bridges design, engineering, and
                        artificial intelligence — crafting seamless products
                        that are as functional as they are beautiful. From
                        developing robust APIs and cloud architectures to
                        integrating machine learning models, I create solutions
                        that bring ideas to life with precision and purpose.
                        <br></br> <br></br>I believe the future belongs to
                        developers who think creatively and engineers who build
                        intelligently. Every project I take on is an opportunity
                        to learn, innovate, and push technology beyond its
                        limits.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
