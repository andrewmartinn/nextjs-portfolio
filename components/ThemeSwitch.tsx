"use client";

import { useTheme } from "@/lib/hooks";
import { BsSun } from "react-icons/bs";
import { PiMoon } from "react-icons/pi";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="borderBlack fixed bottom-5 right-5 rounded-full border p-2 shadow-2xl backdrop-blur-[0.5rem] transition-all hover:scale-[1.15] active:scale-105 dark:border-gray-700"
    >
      {theme === "light" ? <BsSun /> : <PiMoon />}
    </button>
  );
}
