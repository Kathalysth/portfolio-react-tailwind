import sims from "./public/cpesim-mock.jpg";
import afm from "./public/afm-mock.jpg";
import biria from "./public/biria_school_landing.PNG";
import plc from "./public/pearlaw-mock.jpg";

export const projects = [
  {
    title: "Apply For Me",
    background: afm,
    stack: ["React", "Java", "MySQL"],
    description: `A web application that automates the process of Job applications,
    Candidates fill their information and type of jobs they are open to, and the system automatically applies for jobs on their behalf.
    `,
  },

  {
    title: "Student Information Management System (PWA)",
    background: sims,
    stack: ["React", "Node.js", "MongoDB"],
    description: `This software automates manual course registration and students' exam grading.
     This software is used by the department of Computer Engineering University of Benin to perform students’ course registration and exam grading.`,
  },

  {
    title: "Biria School",
    background: biria,
    stack: ["React", "Node.js", "MongoDB"],
    description: `This software is for a high school management system`,
  },
  {
    title: "Pearlaw Corporate",
    background: plc,
    stack: ["NextJS"],
    description: `Static Webpage for a virtual law firm.`,
  },
];
