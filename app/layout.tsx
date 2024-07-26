import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ActiveSectionContextProvider from "@/context/ActiveSection";
import { Toaster, ToastOptions } from "react-hot-toast";

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
        className={`${outfit.className} relative h-[5000px] bg-gray-50 pt-28 text-gray-950 sm:pt-36`}
      >
        <div className="absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] sm:w-[68.75rem]" />
        <div className="absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fe] blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]" />
        <ActiveSectionContextProvider>
          <Navbar />
          <main>{children}</main>
          <Toaster {...toasterProps} />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
