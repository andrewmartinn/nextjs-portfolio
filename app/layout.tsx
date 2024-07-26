import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Toaster, ToastOptions } from "react-hot-toast";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeSwitch from "@/components/ThemeSwitch";

import ActiveSectionContextProvider from "@/context/ActiveSection";
import SiteThemeContextProvider from "@/context/SiteTheme";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andrew Martin | Personal Portfolio",
  description:
    "I'm a passionate Frontend Engineer with expertise in React, Next.js, and creating dynamic web experiences.",
  keywords:
    "Frontend Engineer, Web Developer, React, Next.js, TypeScript, Tailwind CSS, JavaScript",
  icons: {
    icon: "/favicon.ico",
  },
};

const toasterProps: ToastOptions = {
  position: "top-right",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${outfit.className} relative h-[5000px] bg-gray-50 pt-28 text-gray-950 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]" />
        <div className="absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fe] blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#673690]" />
        <ActiveSectionContextProvider>
          <SiteThemeContextProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <Toaster {...toasterProps} />
            <ThemeSwitch />
          </SiteThemeContextProvider>
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
