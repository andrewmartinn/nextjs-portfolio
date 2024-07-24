import giphyImg from "@/public/giphy-preview.png";
import ecommerceCartImg from "@/public/ecommerce-preview.png";
import moviesImg from "@/public/omdb-preview.png";

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
      "Ecommerce app built using Typescript where users can browse products, view product details and manage thier shopping cart by adding, removing items from the cart.",
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
      "Movies app in react app allows users to search for movies and like movies, the liked movies are stored in a MobX store. Additionally the website feature dark/light theme switcher. The website data is sourced from OMDB Movies API",
    tags: ["React", "Chakra UI", "React Router", "MobX"],
    imageUrl: moviesImg,
  },
] as const;
