"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { useActiveSectionContext, useInSectionView } from "@/lib/hooks";

export default function Hero() {
  const { ref } = useInSectionView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClicked } = useActiveSectionContext();

  return (
    <section
      id="home"
      ref={ref}
      className="mb-28 max-w-[50rem] scroll-mt-[100rem] text-center sm:mb-0"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              className="rounded-full object-cover"
              src="/profile-image.png"
              alt="Hero image"
              width={192}
              height={192}
              quality={95}
              priority={true}
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              duration: 0.7,
              delay: 0.1,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 mt-4 px-4 text-2xl font-medium leading-[1.5] sm:text-4xl"
      >
        <span className="font-bold">Hey there, I&apos;m Andrew</span>, a{" "}
        <span className="font-bold">Frontend Engineer</span> who&apos;s{" "}
        <span>enthusiastic about building</span>{" "}
        <span className="font-bold">
          functional and feature-rich user experiences
        </span>{" "}
        with <span className="italic">React & Next.js</span>.
      </motion.h1>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col justify-center gap-4 px-7 text-lg sm:flex-row"
      >
        <Link
          href="#contact"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClicked(Date.now());
          }}
          className="group flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 font-medium text-white outline-none transition hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105"
        >
          Contact me here
          <BsArrowRight className="opacity-75 transition group-hover:translate-x-1" />
        </Link>
        <a
          href="/CV-Sample.pdf"
          download={true}
          className="borderBlack group flex items-center gap-2 rounded-full bg-white px-7 py-3 outline-none transition hover:scale-110 focus:scale-110 active:scale-105"
        >
          Download CV
          <HiDownload className="opacity-60 transition group-hover:translate-y-1" />
        </a>
        <a
          href=" https://www.linkedin.com/in/andrew-martin-80b898253/"
          target="_blank"
          className="borderBlack flex items-center gap-2 rounded-full bg-white p-4 text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/andrewmartinn"
          target="_blank"
          className="borderBlack flex items-center gap-2 rounded-full bg-white p-4 text-[1.35rem] text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
