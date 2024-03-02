"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";

const AboutPgae = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className=" h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className=" h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className=" font-bold text-2xl">BIOGRAPHY</h1>
            <p className=" text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Distinctio ut corporis cupiditate nesciunt aliquid ad, dolor
              facilis harum aliquam ea ratione perferendis autem accusantium non
              blanditiis omnis nemo voluptates quae.
            </p>
            <span className=" italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus, reprehenderit!
            </span>
            <div className=" self-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.0"
                width="116.000000pt"
                height="35.000000pt"
                viewBox="0 0 116.000000 35.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,35.000000) scale(0.100000,-0.100000)"
                  fill="#000000"
                  stroke="none"
                >
                  <path d="M556 241 c-40 -53 -110 -121 -127 -121 -12 0 -4 16 25 49 19 22 17 21 -15 -4 -25 -19 -35 -34 -32 -46 6 -23 12 -23 41 -3 20 14 22 14 22 0 0 -20 34 -21 50 -1 7 8 18 15 25 15 7 0 15 10 19 22 11 42 8 50 -16 43 -18 -6 -14 2 20 37 42 44 50 58 33 58 -5 0 -25 -22 -45 -49z m-22 -102 c-27 -28 -54 -38 -54 -20 0 5 17 24 37 41 45 40 59 23 17 -21z" />
                  <path d="M165 256 c-16 -7 -39 -23 -50 -36 -19 -21 -19 -22 0 -36 10 -8 38 -14 62 -14 24 0 43 -4 43 -8 0 -15 -74 -43 -131 -51 -49 -7 -52 -9 -29 -18 48 -20 165 24 165 63 0 15 -9 20 -47 24 -26 3 -50 9 -54 13 -20 20 90 62 142 55 l29 -4 -25 -12 -25 -12 25 3 c18 1 25 8 25 22 0 17 -7 20 -50 22 -27 2 -63 -3 -80 -11z" />
                  <path d="M320 220 c-57 -68 -47 -71 13 -4 27 30 44 54 39 54 -6 0 -29 -23 -52 -50z" />
                  <path d="M637 206 c-30 -36 -57 -63 -59 -61 -2 2 -4 -5 -4 -15 0 -18 2 -18 23 -5 30 20 36 19 28 -5 -8 -24 16 -28 35 -5 16 19 31 19 24 0 -8 -19 6 -19 34 1 20 14 22 14 22 0 0 -22 10 -20 40 7 14 12 20 18 13 14 -26 -18 -34 -1 -13 26 l21 27 -23 0 c-13 0 -47 -16 -76 -36 -58 -39 -74 -39 -48 1 19 30 15 31 -22 8 -26 -17 -27 -17 -13 2 8 11 33 39 55 63 22 23 35 42 29 42 -6 0 -35 -29 -66 -64z m114 -56 c-19 -16 -37 -27 -40 -25 -8 9 42 55 58 55 11 -1 4 -11 -18 -30z" />
                  <path d="M842 178 c-7 -7 -12 -16 -12 -22 0 -5 -8 -18 -17 -29 -18 -19 -17 -20 5 -8 13 7 27 24 33 38 11 30 8 38 -9 21z" />
                  <path d="M935 174 c-11 -8 -20 -18 -21 -22 0 -4 -4 -15 -9 -25 -15 -35 10 -38 53 -7 52 37 56 49 5 14 -46 -31 -57 -15 -17 27 29 31 23 39 -11 13z" />
                  <path d="M313 169 c-6 -6 -19 -12 -29 -13 -10 -2 -25 -14 -33 -27 l-16 -24 27 18 c35 22 41 22 33 -3 -8 -24 16 -28 35 -5 16 20 30 19 30 -1 0 -13 3 -14 15 -4 8 7 12 17 9 22 -3 5 2 19 13 30 21 25 6 18 -45 -20 -38 -29 -52 -23 -28 13 16 25 10 35 -11 14z" />
                  <path d="M874 165 c-10 -8 -15 -15 -10 -15 5 0 1 -9 -9 -20 -10 -11 -14 -20 -8 -20 18 0 46 27 50 49 3 25 3 25 -23 6z" />
                  <path d="M1020 80 c36 -12 80 -12 80 0 0 6 -24 10 -52 9 -42 -1 -48 -3 -28 -9z" />
                </g>
              </svg>
            </div>
            <motion.svg
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 0.2, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              width={50}
              height={50}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 6V14"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className=" font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <div className="flex gap-4 flex-wrap">
              <motion.div
                initial={{ x: "-300px" }}
                animate={isSkillRefInView ? { x: 0 } : {}}
                transition={{ delay: 0.2 }}
                className=" rounded p-2 text-sm cursor-pointer bg-zinc-900 text-yellow-50 hover:bg-yellow-50 hover:text-zinc-900"
              >
                JavaScript
              </motion.div>
              <motion.div
                initial={{ x: "-300px" }}
                animate={isSkillRefInView ? { x: 0 } : {}}
                transition={{ delay: 0.21 }}
                className=" rounded p-2 text-sm cursor-pointer bg-zinc-900 text-yellow-50 hover:bg-yellow-50 hover:text-zinc-900"
              >
                TypeScript
              </motion.div>
              <motion.div
                initial={{ x: "-300px" }}
                animate={isSkillRefInView ? { x: 0 } : {}}
                transition={{ delay: 0.22 }}
                className=" rounded p-2 text-sm cursor-pointer bg-zinc-900 text-yellow-50 hover:bg-yellow-50 hover:text-zinc-900"
              >
                React.js
              </motion.div>
              <motion.div
                initial={{ x: "-300px" }}
                animate={isSkillRefInView ? { x: 0 } : {}}
                transition={{ delay: 0.23 }}
                className=" rounded p-2 text-sm cursor-pointer bg-zinc-900 text-yellow-50 hover:bg-yellow-50 hover:text-zinc-900"
              >
                Next.js
              </motion.div>
              <motion.div
                initial={{ x: "-300px" }}
                animate={isSkillRefInView ? { x: 0 } : {}}
                transition={{ delay: 0.24 }}
                className=" rounded p-2 text-sm cursor-pointer bg-zinc-900 text-yellow-50 hover:bg-yellow-50 hover:text-zinc-900"
              >
                Tailwind CSS
              </motion.div>
              <motion.div
                initial={{ x: "-300px" }}
                animate={isSkillRefInView ? { x: 0 } : {}}
                transition={{ delay: 0.25 }}
                className=" rounded p-2 text-sm cursor-pointer bg-zinc-900 text-yellow-50 hover:bg-yellow-50 hover:text-zinc-900"
              >
                Node.js
              </motion.div>
              <motion.div
                initial={{ x: "-300px" }}
                animate={isSkillRefInView ? { x: 0 } : {}}
                transition={{ delay: 0.26 }}
                className=" rounded p-2 text-sm cursor-pointer bg-zinc-900 text-yellow-50 hover:bg-yellow-50 hover:text-zinc-900"
              >
                Redux
              </motion.div>
              <motion.div
                initial={{ x: "-300px" }}
                animate={isSkillRefInView ? { x: 0 } : {}}
                transition={{ delay: 0.27 }}
                className=" rounded p-2 text-sm cursor-pointer bg-zinc-900 text-yellow-50 hover:bg-yellow-50 hover:text-zinc-900"
              >
                Framer Motion
              </motion.div>
              <motion.div
                initial={{ x: "-300px" }}
                animate={isSkillRefInView ? { x: 0 } : {}}
                transition={{ delay: 0.28 }}
                className=" rounded p-2 text-sm cursor-pointer bg-zinc-900 text-yellow-50 hover:bg-yellow-50 hover:text-zinc-900"
              >
                Angular.js
              </motion.div>
              <motion.div
                initial={{ x: "-300px" }}
                animate={isSkillRefInView ? { x: 0 } : {}}
                transition={{ delay: 0.29 }}
                className=" rounded p-2 text-sm cursor-pointer bg-zinc-900 text-yellow-50 hover:bg-yellow-50 hover:text-zinc-900"
              >
                Vue.js
              </motion.div>
              <motion.div
                initial={{ x: "-300px" }}
                animate={isSkillRefInView ? { x: 0 } : {}}
                transition={{ delay: 0.3 }}
                className=" rounded p-2 text-sm cursor-pointer bg-zinc-900 text-yellow-50 hover:bg-yellow-50 hover:text-zinc-900"
              >
                Webpack
              </motion.div>
            </div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 0.2, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              width={50}
              height={50}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 6V14"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className=" font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <motion.div
                    initial={{ x: "-300px" }}
                    animate={isExperienceRefInView ? { x: "0" } : {}}
                    transition={{ delay: 0.4 }}
                    className=" bg-yellow-50 p-3 font-semibold rounded-b-lg rounded-s-lg"
                  >
                    Senior JavaScript Engineer
                  </motion.div>
                  {/* JOB DESC */}
                  <motion.div
                    initial={{ x: "-300px" }}
                    animate={isExperienceRefInView ? { x: "0" } : {}}
                    transition={{ delay: 0.3 }}
                    className="p-3 text-sm italic"
                  >
                    My current employment. Way better than the position before!
                  </motion.div>
                  {/* JOB DATE */}
                  <motion.div
                    initial={{ x: "-300px" }}
                    animate={isExperienceRefInView ? { x: "0" } : {}}
                    transition={{ delay: 0.3 }}
                    className="p-3 text-red-400 text-sm font-semibold"
                  >
                    2024 - Present
                  </motion.div>
                  {/* JOB COMPANY */}
                  <motion.div
                    initial={{ x: "-300px" }}
                    animate={isExperienceRefInView ? { x: "0" } : {}}
                    transition={{ delay: 0.2 }}
                    className="p-1 rounded bg-yellow-50 text-sm font-semibold w-fit"
                  >
                    Apple
                  </motion.div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center ">
                  {/* LINE */}
                  <div className=" w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className=" absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-yellow-50 -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3"></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center ">
                  {/* LINE */}
                  <div className=" w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className=" absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-yellow-50 -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 bg">
                  {/* JOB TITLE */}
                  <div className=" bg-yellow-50 p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Senior JavaScript Engineer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    My current employment. Way better than the position before!
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2024 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-yellow-50 text-sm font-semibold w-fit">
                    Apple
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className=" bg-yellow-50 p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Senior JavaScript Engineer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    My current employment. Way better than the position before!
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2024 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-yellow-50 text-sm font-semibold w-fit">
                    Apple
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center ">
                  {/* LINE */}
                  <div className=" w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className=" absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-yellow-50 -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
            </div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className=" hidden lg:block sticky top-0 z-30 lg:w-1/3 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPgae;
