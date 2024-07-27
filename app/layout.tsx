import "./globals.css";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ThemeSwitch from "@/components/ThemeSwitch";
import ActiveSectionContextProvider from "@/context/ActiveSection";
import SiteThemeContextProvider from "@/context/SiteTheme";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Toaster, ToastOptions } from "react-hot-toast";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andrew Martin | Personal Portfolio",
  description:
    "I'm a passionate Frontend Engineer with expertise in React, Next.js, and creating dynamic web experiences.",
  keywords:
    "Frontend Engineer, Web Developer, React, Next.js, TypeScript, Tailwind CSS, JavaScript",
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
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body
        className={`${outfit.className} relative bg-gray-50 pt-28 text-gray-950 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 sm:pt-36`}
      >
        <div className="absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] dark:bg-[#946263] sm:w-[68.75rem]" />
        <div className="absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fe] blur-[10rem] dark:bg-[#673690] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]" />
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
