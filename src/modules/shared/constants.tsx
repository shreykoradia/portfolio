import Talez from "../../../public/images/talez.jpg";
import Grand from "../../../public/images/grand.jpg";
import Webcrumbs from "../../../public/images/webcrumbs.png";
import Twitter from "../../../public/images/twitter.png";
import Peerlist from "../../../public/images/Peerlist.jpg";
import Dev from "../../../public/images/dev.png";

export const ExperienceIntro = `Currently, I am working as an SDE-1 (core-Frontend) at a scaled
          startup, where I have played a pivotal role in developing a
          Sweden based compliance and management product. My contributions
          include the design and implementation of features for document
          sharing, access management, and metadata handling of compliance
          policies. By creating a reusable user interface across modules, I have
          ensured consistency and improved the overall user experience. My
          technical expertise includes working with React and various
          third-party libraries such as Tanstack-query for server-side caching,
          Zustand for client state management, and Syncfusion for UI components.`;

export const ExperienceHeader = `In addition to my organizational experience, I have collaborated with founders who have held leadership positions at Yahoo, Blinkit, and Rippling. My role involved developing and scaling MVPs and building internal tools for their organizations. A notable project was the creation of a SQL querying engine within a React application, utilizing Node.js, GraphQL, Prisma, and ReactJS for seamless client-side operations.`;

export const ExperienceBody = `During my university years, I was a finalist in the Smart India
          Hackathon 2022, where I contributed to the development of an AI tool
          that used neural networks and logarithmic regression to predict
          college rankings. As a Team leader and a Frontend Design lead for the
          Smart India Hackathon Team I entirely managed the architecture of the
          product with its User Experience. This project honed my skills in AI
          and machine learning algortihms, and I learned to tackle complex
          problems with innovative solutions. I also contributed to the early
          development of {${(
            <a href="https://www.webcrumbs.org/">WebCrumbs</a>
          )}, an
          open-source no-code web application.`;
export const ExperienceFooter = `Today I am the founding coder of my saas application which is early
          phases of Proof Of Concept called Talez where users can write tales
          for their product and brainstorm features and bug, add a feedback and
          create a github issue with the repository connected to the workflows.
          Releasing it real quick!`;

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
];

export const socials = [
  {
    title: "Twitter",
    description: "Mostly for Promoting Blogs :)",
    link: "https://x.com/shreykoradia",
    avatar: Twitter,
  },
  {
    title: "Peerlist",
    description: "Mostly Active for Tech Architecture Discussions :)",
    link: "https://peerlist.io/shrey_",
    avatar: Peerlist,
  },
  {
    title: "Dev.to",
    description:
      "Publish my Blogs Once or Twice a month, Have a 25K+ Active Avid Readers of My Blogs :)",
    link: "https://peerlist.io/shrey_",
    avatar: Dev,
  },
];
