import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { ActiveSectionContextType, SectionName } from "./types";
import { ActiveSectionContext } from "@/context/ActiveSection";

export function useActiveSectionContext(): ActiveSectionContextType {
  const context = useContext(ActiveSectionContext);
  if (context === undefined) {
    throw new Error(
      "ActiveSectionContext must be used within an ActiveSectionProvider",
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
