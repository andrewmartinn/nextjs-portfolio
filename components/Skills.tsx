"use client";

import { skillsData } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import { useInSectionView } from "@/lib/hooks";
import { animate, motion, Variants } from "framer-motion";

const itemVariants: Variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (itemIndex: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * itemIndex,
    },
  }),
};

export default function Skills() {
  const { ref } = useInSectionView("Skills");

  return (
    <section ref={ref} id="skills" className="mb-28 max-w-[53rem] scroll-mt-28">
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="borderBlack rounded-lg bg-white px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={skill}
            initial="initial"
            whileInView="animate"
            variants={itemVariants}
            viewport={{ once: true }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
