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
