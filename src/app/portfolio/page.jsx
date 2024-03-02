"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-200 to-blue-200",
    title: "React Commerce",
    desc: "The React Commerce project leverages modern design principles and intuitive user interfaces to streamline the online shopping process, ensuring seamless and effortless transactions for customers.",
    vid: "/vid1.mp4",
    link: "https://github.com/Shubham0085a",
  },
  {
    id: 2,
    color: "from-blue-200 to-violet-200",
    title: "Next.js Medium blog",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    vid: "/vid2.mp4",
    link: "https://github.com/Shubham0085a",
  },
  {
    id: 3,
    color: "from-violet-200 to-purple-200",
    title: "Vanilla Book App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    vid: "/vid3.mp4",
    link: "https://github.com/Shubham0085a",
  },
  {
    id: 4,
    color: "from-purple-200 to-red-200",
    title: "Spotify Music App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    vid: "/vid4.mp4",
    link: "https://github.com/Shubham0085a",
  },
];

const PortfolioPgae = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  return (
    <motion.div
      className=" h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className=" h-[600vh] relative" ref={ref}>
        <div className=" w-screen h-[calc(100vh-6rem)] flex flex-col gap-24 items-center justify-center text-8xl text-center">
          My Works
          <div class="">
            <span class="mouse relative block mx-auto border-2 border-gray-500 rounded-full h-24 w-12">
              <motion.span
                initial={{ opacity: 0.6, y: "10px" }}
                animate={{ opacity: 0.6, y: "70px" }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeOut" }}
                class="move absolute bg-gray-500 rounded-full h-3 w-3 left-0 right-0 mx-auto"
              ></motion.span>
            </span>
            <h2 class="text-gray-500 font-roboto font-light text-xs mt-2">
              Scroll down
            </h2>
          </div>
        </div>
        <div className=" sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className=" h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-200 to-red-200" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className=" flex flex-col gap-8 text-yellow-50">
                  <h1 className=" text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className=" relative">
                    <video
                      src={item.vid}
                      alt=""
                      autoPlay
                      fill
                      loop
                      className="aspect-video w-80 md:w-96 lg:w-[500px] xl:w-[600px] "
                    ></video>
                  </div>
                  <p className=" w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-yellow-100 text-zinc-600 font-semibold m-4 rounded">
                      See Demo
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className=" w-screen h-screen flex flex-col gap-16 items-center justify-center text-center bg-gradient-to-b from-blue-200 to-red-200">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className=" relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px]"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60, 60 0 0, 1 120, 0 a 60, 60 0 0, 1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className=" w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-zinc-900 text-yellow-100 rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPgae;
