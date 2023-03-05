import sims from "./public/student_dashboard_desktop.PNG";
import afm from "./public/afm_home.PNG";
import biria from "./public/biria_school_landing.PNG";

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
];
