"use client";
import { useRef } from "react";
import Card from "@/components/sections/Card";
// import { Globe } from "../components/globe";
// import Globe
// import CopyEmailButton from "../components/CopyEmailButton";
// import { Frameworks } from "../components/FrameWorks";

const After = () => {
  const grid1Container = useRef<HTMLDivElement | null>(null);
  return (
    <section className="my-10 px-10" id="about">
      <h2 className="text-heading">Skills</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div
          className="flex items-end grid-black-color grid-1"
          ref={grid1Container}
        >
          <div className="flex items-center justify-center w-full h-full">
            <p className="lg:text-8xl text-4xl md:text-6xl text-gray-500 uppercase">
              Frontend
            </p>
          </div>
          <Card
            text={"MERN Stack"}
            containerRef={grid1Container as React.RefObject<HTMLElement>}
            style={{ rotate: "75deg", top: "0%", right: "0%" }}
          />
          <Card
            text={"PHP | Laravel"}
            containerRef={grid1Container as React.RefObject<HTMLElement>}
            style={{ rotate: "5deg", bottom: "0%", right: "0%" }}
          />
          <Card
            text={"NEXT Stack"}
            containerRef={grid1Container as React.RefObject<HTMLElement>}
            style={{ rotate: "2deg", top: "0%", left: "" }}
          />
          <Card
            text={"React.js | Next.js | Vue.js"}
            containerRef={grid1Container as React.RefObject<HTMLElement>}
            style={{ rotate: "15deg", top: "20%", left: "0%" }}
          />
          <Card
            text={"TailwindCss | Bootstrap"}
            containerRef={grid1Container as React.RefObject<HTMLElement>}
            style={{ rotate: "15deg", top: "40%", left: "0%" }}
          />
          <Card
            text={"Typescript | Gsap"}
            containerRef={grid1Container as React.RefObject<HTMLElement>}
            style={{ rotate: "15deg", bottom: "0%", left: "0%" }}
            
          />
          <Card
            text={"Wordpress"}
            containerRef={grid1Container as React.RefObject<HTMLElement>}
            style={{ rotate: "75deg", top: "40%", left: "30%" }}
          />
          <Card
            text={"Three.js | More!"}
            containerRef={grid1Container as React.RefObject<HTMLElement>}
            style={{ rotate: "15deg", top: "40%", right: "0%" }}
          />
        </div>
        {/* Grid 2 */}
        <div className="grid-black-color grid-2">
          <div className="flex items-center justify-center w-full h-full">
            <p className="lg:text-8xl text-4xl md:text-6xl text-gray-500 uppercase">
              DevOps
            </p>
          </div>
          <Card
            text={"Docker"}
            containerRef={grid1Container as React.RefObject<HTMLElement>}
            style={{ rotate: "15deg", top: "0%", left: "0%" }}
          />
          <Card
            text={"Vercel"}
            containerRef={grid1Container as React.RefObject<HTMLElement>}
            style={{ rotate: "15deg", top: "0%", right: "0%" }}
          />
          <Card
            text={"Git | GitHub"}
            containerRef={grid1Container as React.RefObject<HTMLElement>}
            style={{ rotate: "15deg", bottom: "0%", right: "0%" }}
          />
          <Card
            text={"AWS | Cloudflare"}
            containerRef={grid1Container as React.RefObject<HTMLElement>}
            style={{ rotate: "15deg", bottom: "0%", left: "0%" }}
          />
          {/* <Card
            text={"UX Design"}
            containerRef={grid1Container as React.RefObject<HTMLElement>}
            style={{ rotate: "75deg", top: "40%", left: "10%" }}
          /> */}
          <Card
            text={"Kubernetes"}
            containerRef={grid1Container as React.RefObject<HTMLElement>}
            style={{ rotate: "15deg", top: "40%", right: "0%" }}
          />
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="flex items-center justify-center w-full h-full">
            <p className="lg:text-8xl text-4xl md:text-6xl text-gray-500 uppercase">
              Backend
            </p>
          </div>
          <Card
            text={"Node.js"}
            containerRef={grid1Container as React.RefObject<HTMLElement>}
            style={{ rotate: "15deg", top: "0%", left: "0%" }}
          />
          <Card
            text={"Flask"}
            containerRef={grid1Container as React.RefObject<HTMLElement>}
            style={{ rotate: "15deg", top: "0%", right: "0%" }}
          />
          <Card
            text={"Django"}
            containerRef={grid1Container as React.RefObject<HTMLElement>}
            style={{ rotate: "15deg", bottom: "0%", right: "0%" }}
          />
          <Card
            text={"MongoDb"}
            containerRef={grid1Container as React.RefObject<HTMLElement>}
            style={{ rotate: "15deg", bottom: "0%", left: "0%" }}
          />
          <Card
            text={"SQl | PostgreSQL"}
            containerRef={grid1Container as React.RefObject<HTMLElement>}
            style={{ rotate: "75deg", top: "40%", left: "10%" }}
          />
          <Card
            text={"Express"}
            containerRef={grid1Container as React.RefObject<HTMLElement>}
            style={{ rotate: "15deg", top: "40%", right: "0%" }}
          />
        </div>
        {/* Grid 4 */}
        <div className="grid-black-color grid-4">
          <div className="flex items-center justify-center w-full h-full">
            <p className="lg:text-8xl text-4xl md:text-6xl text-gray-500">
              UI | UX
            </p>
          </div>
          <Card
            text={"Figma"}
            containerRef={grid1Container as React.RefObject<HTMLElement>}
            style={{ rotate: "15deg", top: "0%", left: "0%" }}
          />
          <Card
            text={"Notion"}
            containerRef={grid1Container as React.RefObject<HTMLElement>}
            style={{ rotate: "15deg", top: "0%", right: "0%" }}
          />
          <Card
            text={"Colors"}
            containerRef={grid1Container as React.RefObject<HTMLElement>}
            style={{ rotate: "15deg", bottom: "0%", right: "0%" }}
          />
          <Card
            text={"Text"}
            containerRef={grid1Container as React.RefObject<HTMLElement>}
            style={{ rotate: "15deg", bottom: "0%", left: "0%" }}
          />
          <Card
            text={"UX Design"}
            containerRef={grid1Container as React.RefObject<HTMLElement>}
            style={{ rotate: "75deg", top: "40%", left: "10%" }}
          />
          <Card
            text={"UI Design"}
            containerRef={grid1Container as React.RefObject<HTMLElement>}
            style={{ rotate: "15deg", top: "40%", right: "0%" }}
          />
        </div>
        {/* Grid 5 */}
        <div className="grid-black-color grid-5">
          <div className="flex items-center justify-center w-full h-full">
            <p className="lg:text-8xl text-4xl md:text-6xl text-gray-500">
              AI | ML | DL
            </p>
          </div>
          <Card
            text={"Python"}
            containerRef={grid1Container as React.RefObject<HTMLElement>}
            style={{ rotate: "15deg", top: "0%", left: "0%" }}
          />
          <Card
            text={"TensorFlow"}
            containerRef={grid1Container as React.RefObject<HTMLElement>}
            style={{ rotate: "15deg", top: "0%", right: "0%" }}
          />
          <Card
            text={"Pytorch"}
            containerRef={grid1Container as React.RefObject<HTMLElement>}
            style={{ rotate: "15deg", bottom: "0%", right: "0%" }}
          />
          <Card
            text={"SciKit"}
            containerRef={grid1Container as React.RefObject<HTMLElement>}
            style={{ rotate: "15deg", bottom: "0%", left: "0%" }}
          />
          <Card
            text={"LangChain"}
            containerRef={grid1Container as React.RefObject<HTMLElement>}
            style={{ rotate: "75deg", top: "40%", left: "10%" }}
          />
          <Card
            text={"Numpy"}
            containerRef={grid1Container as React.RefObject<HTMLElement>}
            style={{ rotate: "75deg", bottom: "40%", left: "-20%" }}
          />
          <Card
            text={"Pandas"}
            containerRef={grid1Container as React.RefObject<HTMLElement>}
            style={{ rotate: "15deg", top: "40%", right: "0%" }}
          />
        </div>
      </div>
    </section>
  );
};

export default After;
