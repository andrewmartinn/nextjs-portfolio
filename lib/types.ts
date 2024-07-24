import { SetStateAction } from "react";
import { navLinks, projectsData } from "./data";

export type SectionName = (typeof navLinks)[number]["name"];

export type ProjectCardProps = (typeof projectsData)[number];

export type SectionHeadingProps = {
  children: React.ReactNode;
};

export type ActiveSectionProviderProps = {
  children: React.ReactNode;
};

export type ActiveSectionContextType = {
  activeSection: SectionName;
  timeOfLastClicked: number;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  setTimeOfLastClicked: React.Dispatch<SetStateAction<number>>;
};
