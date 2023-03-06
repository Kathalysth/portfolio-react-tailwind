import React from "react";
import ItemsContainer from "./ItemsContainer";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="bg-slate-200 dark:bg-gray-700 dark:text-white text-gray-200">
      <ItemsContainer />
      <div
        className="flex flex-col justify-center items-center gap-10
      text-center  text-gray-400 text-sm p-12 border-t-solid border-t-gray-700 border-t"
      >
        <Socials />
        <span>© 2023 Chris Ehigimetor. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
