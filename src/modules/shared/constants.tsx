import Dev from "@/assets/icons/dev.svg";
import Grand from "@/assets/icons/grand.svg";
import Linkedin from "@/assets/icons/linkedin.svg";
import Twitter from "@/assets/icons/twitter.svg";

import Talez from "../../../public/images/talez.jpg";
import Webcrumbs from "../../../public/images/webcrumbs.png";
import Peerlist from "../../../public/images/Peerlist.jpg";
import Indie from "../../../public/images/indie.png";

export const experienceData = [
  {
    title: "SDE @radicalloop",
    points: [
      "Working as an SDE-1 (core-Frontend) at a scaled startup.",
      "Developed a Sweden-based compliance and management product.",
      "Designed features for document sharing, access management, and metadata handling.",
      "Created reusable user interfaces across modules for consistency and improved UX.",
      "Technical expertise in React, Tanstack-query, Zustand, and Syncfusion.",
    ],
  },
  {
    title: "Frontend-FullStack Engineer @SecureMyOrg",
    points: [
      "Collaborated with founders from Yahoo, Blinkit, and Rippling.",
      "Developed and scaled MVPs and built internal tools.",
      "Created a SQL querying engine within a React application using Node.js, GraphQL, Prisma, and ReactJS.",
    ],
  },
  {
    title: "Contributor @Webcrumbs, @SIH'22",
    points: [
      "Finalist in Smart India Hackathon 2022.",
      "Developed an AI tool to predict college rankings using neural networks and logarithmic regression.",
      "Led and designed the frontend for the Smart India Hackathon Team.",
      "Contributed to the development of WebCrumbs, an open-source no-code web application.",
    ],
  },
  {
    title: "Product Engineer / Founding Coder @Talez",
    points: [
      "Founding coder of a SaaS application called Talez.",
      "Talez allows users to write tales for their product, brainstorm features and bugs, add feedback, and create GitHub issues.",
      "Currently in the proof of concept phase.",
    ],
  },
];

export const projectLinks = [
  {
    title: "Talez (Solo Indie Hacker - MERN Stack)",
    description: `Talez is a saas application where product engineers can write stories or tales for their product or project and can brainstorm any features or bugs and can create tickets on github issues with a summarized description focusing more on product requirements.`,
    avatar: Talez,
    link: "https://talez-flames.vercel.app",
  },
  {
    title: "Grand (Core Frontend Contributor - React.js)",
    description: `Grand is a B2B saas application which is an AI software tool for compliance and asset management based in Sweden.`,
    avatar: Grand,
    link: "https://www.grand.io/",
  },
  {
    title: "WebCrumbs (Contributor - Next.js)",
    description: `WebCrumbs Build the modern web, one plugin at a time. Open source, collaborative and plug-and-play.`,
    avatar: Webcrumbs,
    link: "https://www.webcrumbs.org",
  },
  {
    title: "Roast My Github (Core Contributor - Next.js)",
    description: `Roast My Github is a Product of the Month - June'24 on Peerlist, an application for fun way to get roast for your github repository data, where you can then ideally find the job hunting tips on the basis of github roast of your own github repository data.`,
    avatar: Indie,
    link: "https://peerlist.io/shrey_/project/roast-my-github",
  },
];

export const socials = [
  {
    title: "Twitter",
    description: "Mostly for Promoting Blogs & Proof of Work :)",
    link: "https://x.com/shreykoradia",
    avatar: Twitter,
  },
  {
    title: "Peerlist",
    description:
      "Mostly Active for Tech Architecture Discussions and Product launch! :)",
    link: "https://peerlist.io/shrey_",
    avatar: Peerlist,
  },
  {
    title: "LinkedIn",
    description:
      "Mostly Active for Tech Opportunites and connect with cool Founders! :)",
    link: "https://www.linkedin.com/in/shrey-koradia-8294b11a0",
    avatar: Linkedin,
  },
  {
    title: "Dev.to",
    description:
      "Publish my Blogs Once or Twice a month, Have a 25K+ Active Avid Readers of My Blogs :)",
    link: "https://dev.to/delisrey",
    avatar: Dev,
  },
];

export const skills = [
  { title: "HTML / CSS3" },
  { title: "Javascript" },
  { title: "TypeScript" },
  { title: "React.js" },
  { title: "Next.js" },
  { title: "Node.js" },
  { title: "Express.js" },
  { title: "Mongo DB" },
  { title: "Pg-Sql" },
  { title: "React-Query" },
  { title: "Zustand" },
  { title: "GraphQl" },
  { title: "Prisma" },
  { title: "REST API's" },
  { title: "Git & Github" },
  { title: "Firebase" },
  { title: "Supabase" },
  { title: "Vercel" },
  { title: "Railway" },
];
