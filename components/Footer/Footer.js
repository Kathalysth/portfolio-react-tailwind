import React from "react";
import CircleShape from "../CircleShape";
import PatternShape from "../PatternShape";
import ItemsContainer from "./ItemsContainer";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-slate-200 dark:bg-gray-700 dark:text-white text-gray-200">
      <PatternShape />
      <ItemsContainer />
      <div
        className="flex flex-col justify-center items-center gap-10
      text-center  text-gray-400 text-sm p-12 border-t-solid border-t-slate-300 dark:border-t-gray-500 border-t"
      >
        <Socials />
        <span>© 2023 Chris Ehigimetor. All rights reserved.</span>
      </div>
      <CircleShape />
    </footer>
  );
};

export default Footer;
