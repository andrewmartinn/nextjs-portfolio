"use client";

import { projectsData } from "@/lib/data";
import { useInSectionView } from "@/lib/hooks";

import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const { ref } = useInSectionView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="mb-28 scroll-mt-28">
      <SectionHeading>Projects</SectionHeading>
      {projectsData.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </section>
  );
}
