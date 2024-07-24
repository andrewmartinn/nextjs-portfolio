"use client";

import { createContext, useState } from "react";
import type {
  ActiveSectionContextType,
  ActiveSectionProviderProps,
  SectionName,
} from "@/lib/types";

export const ActiveSectionContext = createContext<
  ActiveSectionContextType | undefined
>(undefined);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClicked, setTimeOfLastClicked] = useState<number>(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        timeOfLastClicked,
        setActiveSection,
        setTimeOfLastClicked,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}
