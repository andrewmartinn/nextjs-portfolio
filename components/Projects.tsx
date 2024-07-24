"use client";

import { projectsData } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";
import { useInSectionView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useInSectionView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28">
      <SectionHeading>Projects</SectionHeading>
      {projectsData.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </section>
  );
}