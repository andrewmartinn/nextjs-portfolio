"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useInSectionView } from "@/lib/hooks";

export default function About() {
  const { ref } = useInSectionView("About");

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[45rem] scroll-mt-48 text-center leading-8 sm:mb-40"
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-10 mt-4 px-4 font-medium leading-[1.5] sm:text-lg">
        I&apos;m a <span className="font-bold">Middlesex University</span>{" "}
        graduate with a BS in{" "}
        <span className="font-bold">Information Technology</span>, passionate
        about crafting sleek and modern user interfaces. I love diving into
        advanced user features and creating custom application widgets. My
        current tech stack includes{" "}
        <span className="italic">
          React.js, Next.js, TypeScript, MobX, Chakra UI and Framer Motion
        </span>
        , and I&apos;m always on the lookout for new technological & development
        trends to explore and learn.
      </p>
      <p className="mb-10 mt-4 px-4 font-medium leading-[1.5] sm:text-lg">
        I&apos;m actively seeking a{" "}
        <span className="font-bold">
          full-time position as a Software Engineer
        </span>
        , dedicated to delivering optimal and efficient results. I thrive on
        implementing user interfaces and customer-facing application features.
        My recent internship at <span className="font-bold">Tech Unicorn</span>{" "}
        was a fantastic learning experience, allowing me to develop new skills
        and contribute to exciting client projects.
      </p>
      <p className="mb-10 mt-4 px-4 font-medium leading-[1.5] sm:text-lg">
        Outside of coding, I&apos;m a huge sports fan—
        <span className="font-bold">MMA</span>,{" "}
        <span className="font-bold">F1</span>, you name it. I also enjoy making
        music in my free time.
      </p>
    </motion.section>
  );
}
