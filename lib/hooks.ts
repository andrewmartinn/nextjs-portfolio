import { useContext, useEffect } from "react";

import { ActiveSectionContext } from "@/context/ActiveSection";
import { SiteThemeContext } from "@/context/SiteTheme";
import { useInView } from "react-intersection-observer";

import type { ActiveSectionContextType, SectionName } from "./types";

export function useActiveSectionContext(): ActiveSectionContextType {
  const context = useContext(ActiveSectionContext);
  if (context === undefined) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionProvider",
    );
  }
  return context;
}

export function useInSectionView(
  sectionName: SectionName,
  sectionThreshold: number = 0.75,
) {
  const { ref, inView } = useInView({
    threshold: sectionThreshold,
  });
  const { setActiveSection, timeOfLastClicked } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClicked > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClicked, sectionName]);

  return { ref };
}

export const useTheme = () => {
  const context = useContext(SiteThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within an SiteThemeProvider");
  }
  return context;
};
