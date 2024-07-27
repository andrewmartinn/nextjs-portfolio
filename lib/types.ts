import { SetStateAction } from "react";

import { Theme } from "@react-email/components";

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

export type ContactFormEmailTemplateProps = {
  message: string;
  senderEmail: string;
};

export type ThemeType = "light" | "dark";

export type SiteThemeContextType = {
  theme: ThemeType;
  toggleTheme: () => void;
};

export type SiteThemeProviderProps = {
  children: React.ReactNode;
};
