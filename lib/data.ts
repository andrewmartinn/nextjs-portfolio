import giphyImg from "@/public/giphy-preview.png";
import React from "react";
import ecommerceCartImg from "@/public/ecommerce-preview.png";
import moviesImg from "@/public/omdb-preview.png";
import { CgWebsite, CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";

export const navLinks = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Giphy Clone React",
    description:
      "React App inspired by GIPHY, allowing users to search for GIFs, stickers, or text and favourite GIFs. Dynamically generate sharable urls to Share and Embed GIFs. Built using offical GIPHY SDK ",
    tags: [
      "React",
      "Tailwind CSS",
      "Javascript",
      "React Router",
      "Framer Motion",
      "API Integration",
    ],
    imageUrl: giphyImg,
  },
  {
    title: "Ecommerce Cart",
    description:
      "Ecommerce cart built using Typescript where users can browse products, view product details and manage thier shopping cart by adding, removing items from the cart.",
    tags: [
      "React",
      "TypeScript",
      "Tailwind",
      "MobX",
      "API Integration",
      "React Router",
    ],
    imageUrl: ecommerceCartImg,
  },
  {
    title: "OMDB Movies",
    description:
      "Movies search app allows users to search and like movies to keep track of movies also sort movies by release year or titles. Application state is managed in MobX store",
    tags: ["React", "Chakra UI", "React Router", "MobX"],
    imageUrl: moviesImg,
  },
] as const;

export const skillsData = [
  "React.js",
  "Next.js",
  "Vue.js",
  "Typescript",
  "Chakra UI",
  "Material UI",
  "Javascript",
  "Tailwind CSS",
  "Framer Motion",
  "MobX",
  "Context API",
  "HTML",
  "CSS",
  "TypeScript",
  "Node.js",
  "REST API",
  "Express",
  "MongoDB",
  "Git",
  "Figma",
  "Azure DevOps",
] as const;

export const experiencesData = [
  {
    id: 1,
    title: "Frontend Enginner Intern - Tech Unicorn",
    location: "Dubai",
    description:
      "Building user interfaces using React, Typescript and MobX for internal projects, Integrating third party APIs into exisitng projects, Worked with Microsft Azure SDKs",
    icon: React.createElement(FaReact),
    date: "02/2024 - 05/2024",
  },
  {
    id: 2,
    title: "Project IT Coordinator - Lion Industries",
    location: "Dubai, UAE",
    description:
      "Oversaw daily tasks related to the CCTV project and IT infrastructure including ELV-Telecom,WiFi and IP Telephony systems.",
    icon: React.createElement(CgWorkAlt),
    date: "05/2023 - 01/2024",
  },
  {
    id: 3,
    title: "Web Developer Intern - Captial Technolgies",
    location: "Dubai, UAE",
    description:
      "Spearheaded the creation of the company's website from conceptualization to deployment. Translated figma prototypes into responsive and interactive components using front end frameworks and libraries including React, Javascript and Tailwind CSS",
    icon: React.createElement(CgWebsite),
    date: "10/2022 - 04/2023",
  },
] as const;
