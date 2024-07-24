"use client";

import Image from "next/image";
import { useRef } from "react";
import type { ProjectCardProps } from "@/lib/types";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
}: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="group mb-3 last:mb-0 sm:mb-8"
    >
      <section className="relative max-w-[42rem] overflow-hidden rounded-lg border border-black/5 bg-gray-100 transition hover:bg-gray-200 sm:h-[24rem] sm:pr-8">
        <div className="pt:pt-10 flex h-full flex-col px-5 pb-7 pt-4 group-even:ml-[19rem] sm:max-w-[50%] sm:pl-10 sm:pr-2">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-700">
            {description}
          </p>
          <ul className="mt-4s flex flex-wrap gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="rounded-full bg-black/[0.7] px-3 py-1 text-[0.6rem] uppercase tracking-wider text-white"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt={title}
          quality={90}
          className="absolute -right-40 top-8 w-[28.25rem] rounded-t-lg shadow-2xl transition group-even:-left-40 group-even:right-[initial] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04] group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:-rotate-2"
        />
      </section>
    </motion.div>
  );
}
