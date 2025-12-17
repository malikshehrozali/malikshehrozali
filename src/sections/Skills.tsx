import Hover from "@/components/sections/Hover";
import Image from "next/image";

const Skills = () => {
  const frontend = [
    "/html.svg",
    "/css.svg",
    "/sass.svg",
    "/tailwind.svg",
    "/reactjs.svg",
    "/next.svg",
    "/auth.svg",
    "/light-redux.svg",
    "/linux.svg",
    "/stripe.svg",
    "/vue.svg",
  ];
  const backend = [
    "/backend/aws.svg",
    "/backend/chain.svg",
    "/backend/django.svg",
    "/backend/flask.svg",
    "/backend/docker.svg",
    "/backend/express.svg",
    "/backend/firebase.svg",
    "/backend/git.svg",
    "/backend/github.svg",
    "/backend/graph.svg",
    "/backend/mongodb.svg",
    "/backend/mysql.svg",
    "/backend/node.svg",
    "/backend/postgresql.svg",
    "/backend/rest-api.svg",
    "/backend/vercel.svg",
  ];
  const ai = [
    "/backend/python.svg",
    "/backend/rest-api.svg",
    "/backend/pytorch.svg",
    "/backend/scikitlearn.svg",
    "/backend/panda.svg",
    "/backend/numpy.svg",
    "/backend/chain.svg",
    "/backend/postgresql.svg",
    "/backend/git.svg",
    "/backend/github.svg",
    "/backend/firebase.svg",
    "/backend/django.svg",
    "/backend/flask.svg",
    "/backend/mysql.svg",
  ];
  const steps = [
    {
      id: "01",
      title: "Discover",
      desc: "I start by understanding the 'why' — uncovering user needs, defining goals, and shaping the project vision.",
    },
    {
      id: "02",
      title: "Design",
      desc: "I translate ideas into structured concepts, wireframes, and experiences that feel intuitive and purposeful.",
    },
    {
      id: "03",
      title: "Develop",
      desc: "I bring designs to life through clean, modular code — optimizing every component for performance and scalability.",
    },
    // {
    //   id: "04",
    //   title: "Refine",
    //   desc: "Through testing, iteration, and feedback, I polish every interaction until it feels seamless.",
    // },
    // {
    //   id: "05",
    //   title: "Deploy & Evolve",
    //   desc: "Launch is never the end — I monitor, learn, and continuously evolve products to grow alongside their users.",
    // },
  ];
  return (
    <div className="h-full w-full my-20 " id="skills">
      <div className="w-full h-full flex items-center justify-center flex-col gap-20">
        <div className="w-[70vw] flex items-center justify-center overflow-hidden">
          <div
            className="w-full h-[10vh] flex items-center gap-20 justify-between select-none infinite  "
            aria-hidden="true"
          >
            {frontend.map((image, index) => (
              <Image
                src={image}
                alt="image"
                width={70}
                height={70}
                key={index}
                className="hover:grayscale-0 grayscale hover:shadow-lg hover:shadow-primary-orange rounded-full"
              />
            ))}
            {frontend.map((image, index) => (
              <Image
                src={image}
                alt="image"
                width={70}
                height={70}
                key={index}
                className="hover:grayscale-0 grayscale hover:shadow-lg hover:shadow-primary-orange rounded-full"
              />
            ))}
          </div>
        </div>
        <div className="w-[70vw] flex items-center justify-center overflow-hidden">
          <div
            className="w-full h-[10vh] flex items-center gap-20 justify-between select-none infinite-inverse  "
            aria-hidden="true"
          >
            {backend.map((image, index) => (
              <Image
                src={image}
                alt="image"
                width={70}
                height={70}
                key={index}
                className="hover:grayscale-0 grayscale hover:shadow-lg hover:shadow-primary-orange rounded-full"
              />
            ))}
            {backend.map((image, index) => (
              <Image
                src={image}
                alt="image"
                width={70}
                height={70}
                key={index}
                className="hover:grayscale-0 grayscale hover:shadow-lg hover:shadow-primary-orange rounded-full"
              />
            ))}
          </div>
        </div>
        <div className="w-[70vw] flex items-center justify-center overflow-hidden">
          <div
            className="w-full h-[10vh] flex items-center gap-20 justify-between select-none infinite"
            aria-hidden="true"
          >
            {ai.map((image, index) => (
              <Image
                src={image}
                alt="image"
                width={70}
                height={70}
                key={index}
                className="hover:grayscale-0 grayscale hover:shadow-lg hover:shadow-primary-orange rounded-full"
              />
            ))}
            {ai.map((image, index) => (
              <Image
                src={image}
                alt="image"
                width={70}
                height={70}
                key={index}
                className="hover:grayscale-0 grayscale hover:shadow-lg hover:shadow-primary-orange rounded-full"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
