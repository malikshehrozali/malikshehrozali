import Image from "next/image";
import toast from "react-hot-toast";

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
      <div className="my-10 h-full w-full py-10 px-[10vw] ">
        <div className="relative w-[70vw] h-[80vh] p-10 flex flex-col lg:flex-row items-center justify-between bg-black border-2 border-primary-orange rounded-2xl z-10 shadow-lg shadow-primary-orange">
          <div className="flex-1 hidden lg:flex">
            <p className="text-[35vw] -mt-20 maskText">01</p>
          </div>
          <div className="flex-1 flex items-start flex-col gap-3 justify-center -mt-15 lg:mt-0">
            <p className="text-lg text-primary-orange">About Me</p>
            <h2 className="text-5xl relative">Biography</h2>
            <p className="text-lg">
              I’m a passionate Full Stack Developer and AI Engineer dedicated to
              building intelligent, scalable, and user-focused digital
              solutions. With a deep understanding of both frontend and backend
              technologies, I craft seamless applications that blend
              performance, design, and functionality.
            </p>
            <p className="hidden xl:block text-lg">
              My work spans from developing robust APIs and cloud-native
              architectures to integrating machine learning models that bring
              automation and intelligence to products. I’m particularly skilled
              in React, Next.js, Node.js, Python, and TensorFlow, and I love
              turning complex challenges into clean, efficient solutions.
            </p>
            <p className="hidden xl:block text-lg">
              Beyond coding, I’m driven by curiosity — exploring how AI and
              human creativity can work together to redefine what technology can
              do. Whether I’m optimizing systems or experimenting with new
              frameworks, I approach every project with precision, innovation,
              and purpose.
            </p>
          </div>
        </div>
        <div className="relative w-[70vw] h-[80vh] bg-black border-2 border-primary-orange rounded-2xl p-10 flex flex-col lg:flex-row items-center justify-between z-5 -mt-[5vh] ml-[10vw] shadow-lg shadow-primary-orange">
          <div className="flex-1 flex items-start flex-col gap-3 justify-center ">
            <p className="text-lg text-primary-orange">Expertise</p>
            <h2 className="md:text-5xl text-3xl font-bold relative">
              Tech Stack
            </h2>
            <div className="grid md:grid-cols-2 xl:gap-8 gap-3  text-gray-300">
              <div>
                <h3 className="text-xl font-semibold text-white border-b border-gray-700 pb-2 mb-3">
                  Frontend
                </h3>
                <p className="text-sm tracking-wide">
                  React · Next.js · Vue.js · TypeScript · Tailwind CSS · Framer
                  Motion · GSAP · ThreeJs · Much More!
                </p>
              </div>
              {/* repeat for AI, Databases, DevOps, Other Tools */}
              <div>
                <h3 className="text-xl font-semibold text-white border-b border-gray-700 pb-2 md:mb-3">
                  Backend
                </h3>
                <p className="text-sm tracking-wide">
                  Node.js · Express · Flask · Django · REST · GraphQL
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white border-b border-gray-700 pb-2 md:mb-3">
                  Database
                </h3>
                <p className="text-sm tracking-wide">
                  MongoDb · PostgreSQL · MySQL · MySQL · FireBase
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white border-b border-gray-700 pb-2 md:mb-3">
                  Artificial Intelligence | Machine Learning
                </h3>
                <p className="text-sm tracking-wide">
                  Python · TensorFlow · Pytorch · SciKit · LangChain · Pandas ·
                  Numpy
                </p>
              </div>
              <div className="hidden xl:block">
                <h3 className="text-xl font-semibold text-white border-b border-gray-700 pb-2 md:mb-3">
                  DevOps / Cloud
                </h3>
                <p className="text-sm tracking-wide">
                  Docker · AWS · Vercel · Git · CI/CD
                </p>
              </div>
              <div className="hidden xl:block">
                <h3 className="text-xl font-semibold text-white border-b border-gray-700 pb-2 mb-3">
                  Other Tools
                </h3>
                <p className="text-sm tracking-wide">
                  Figma · Postman · VS Code · GitHub · Notion · Much More!
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 hidden lg:block">
            <p className="text-[30vw] maskText2">02</p>
          </div>
        </div>
        <div className="relative w-[70vw] h-[80vh]  p-10 flex flex-col lg:flex-row items-center justify-between bg-black border-2 border-primary-orange rounded-2xl -mt-[5vh] shadow-lg shadow-primary-orange">
          <div className="flex-1 hidden lg:flex">
            <p className="text-[40vw] lg:text-[30vw] maskText">03</p>
          </div>
          <div className="flex-1 flex items-start flex-col gap-2 justify-center -mt-40 lg:mt-0">
            <p className="text-lg text-primary-orange">The Mindset</p>
            <h2 className="text-3xl lg:text-5xl font-bold relative">
              I don’t just build products — I craft experiences that think,
              adapt, and inspire.
            </h2>
            <div className="space-y-2">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className="flex items-start gap-6 border-l-2 border-primary-orange pl-6"
                >
                  <div className="text-4xl font-bold text-primary-orange">
                    {step.id}
                  </div>
                  <div>
                    <h4 className="text-xl text-white font-medium mb-2">
                      {step.title}
                    </h4>
                    <p className="text-gray-400 max-w-2xl hidden xl:block">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
