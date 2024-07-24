import { projectsData } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section>
      <SectionHeading>Projects</SectionHeading>
      {projectsData.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </section>
  );
}
