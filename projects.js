import sims from "./public/cpesim-mock.jpg";
import afm from "./public/afm-mock.jpg";
import biria from "./public/biria_school_landing.PNG";
import mysoccer from "./public/mysoccer-ui.PNG";
import plc from "./public/pearlaw-mock.jpg";
import jaTours from "./public/9jatours.PNG";
import chessMate from "./public/chess_v4.PNG";
import appleClone from "./public/apple-clone.PNG";
import ReactIcon from "./public/svg/react-javascript-js-framework-facebook-svgrepo-com.svg";
import NodeIcon from "./public/svg/nodejs-icon-svgrepo-com (1).svg";
import MongoDBIcon from "./public/svg/mongodb-svgrepo-com.svg";
import NextjsICon from "./public/svg/nextjs-icon.svg";
import MySqlICon from "./public/svg/mysql-logo-svgrepo-com.svg";
import JavaIcon from "./public/svg/java-svgrepo-com.svg";
import TypeScriptIcon from "./public/svg/typescript-official-svgrepo-com.svg";

const ICON_SIZE = 40;
export const projects = [
  {
    title: "Apply For Me",
    background: afm,
    stack: [
      { icon: <ReactIcon width={ICON_SIZE} height={ICON_SIZE} /> },
      { icon: <MySqlICon width={ICON_SIZE} height={ICON_SIZE} /> },
      { icon: <JavaIcon width={ICON_SIZE} height={ICON_SIZE} /> },
    ],
    gitHubUrl: "https://github.com/workshopapps/applyforme.web",
    description: `A web application that automates the process of Job applications,
    Candidates fill their information and type of jobs they are open to, and the system automatically applies for jobs on their behalf.
    `,
  },

  {
    title: "Student Information Management System (PWA)",
    background: sims,
    stack: [
      { icon: <ReactIcon width={ICON_SIZE} height={ICON_SIZE} /> },
      { icon: <NodeIcon width={ICON_SIZE} height={ICON_SIZE} /> },
      { icon: <MongoDBIcon width={ICON_SIZE} height={ICON_SIZE} /> },
    ],
    gitHubUrl: "",
    description: `This software automates manual course registration and students' exam grading.
     This software is used by the department of Computer Engineering University of Benin to perform students’ course registration and exam grading.`,
  },
  {
    title: "MySoccer",
    background: mysoccer,
    stack: [
      { icon: <TypeScriptIcon width={ICON_SIZE} height={ICON_SIZE} /> },
      { icon: <ReactIcon width={ICON_SIZE} height={ICON_SIZE} /> },
      { icon: <NodeIcon width={ICON_SIZE} height={ICON_SIZE} /> },
      { icon: <MongoDBIcon width={ICON_SIZE} height={ICON_SIZE} /> },
    ],
    gitHubUrl: "",
    liveLink: "https://mysoccer.vercel.app",
    description: `MySoccer is a soccer app for a footballing group where matches, stats and player information are available, it also allows for soccer fantasy mode where players are selected, managed and points are awarded based on player performance.`,
  },

  {
    title: "Biria School",
    background: biria,
    stack: [
      { icon: <ReactIcon width={ICON_SIZE} height={ICON_SIZE} /> },
      { icon: <NodeIcon width={ICON_SIZE} height={ICON_SIZE} /> },
      { icon: <MongoDBIcon width={ICON_SIZE} height={ICON_SIZE} /> },
    ],
    gitHubUrl: "",
    description: `This software is for a high school management system`,
  },
  {
    title: "Pearlaw Corporate",
    background: plc,
    stack: [{ icon: <NextjsICon width={ICON_SIZE} height={ICON_SIZE} /> }],
    gitHubUrl: "https://github.com/Kathalysth/plc",
    liveLink: "https://pearlawcorporate.vercel.app",
    description: `Static Webpage for a virtual law firm.`,
  },
  {
    title: "9jaTours",
    background: jaTours,
    stack: [
      { icon: <TypeScriptIcon width={ICON_SIZE} height={ICON_SIZE} /> },
      { icon: <ReactIcon width={ICON_SIZE} height={ICON_SIZE} /> },
    ],
    gitHubUrl: "https://github.com/Kathalysth/tourism",
    liveLink: "https://9jatours.vercel.app",
    description: `Explore amazing locations in nigeria you would love to visit.`,
  },
  {
    title: "Apple Clone",
    background: appleClone,
    stack: [
      { icon: <TypeScriptIcon width={ICON_SIZE} height={ICON_SIZE} /> },
      { icon: <ReactIcon width={ICON_SIZE} height={ICON_SIZE} /> },
    ],
    gitHubUrl: "https://github.com/Kathalysth/apple-clone",
    description: `Interesting Clone of the Apple website.`,
  },
  {
    title: "Chess Mate",
    background: chessMate,
    stack: [
      { icon: <TypeScriptIcon width={ICON_SIZE} height={ICON_SIZE} /> },
      { icon: <ReactIcon width={ICON_SIZE} height={ICON_SIZE} /> },
    ],
    gitHubUrl: "https://github.com/Kathalysth/chess-multiplayer",
    description: `An Awesome chess game built from stratch with react and typescript.`,
  },
];
