import Image from "next/image";
import PatternShape from "../PatternShape";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import RenderStack from "../RenderStack";
const Projects = ({ project, number }) => {
  return (
    <li className="bg-slate-100 dark:bg-gray-700/[0.8] w-128 md:h-72 rounded shadow-md flex flex-col md:flex-row card text-gray-900 dark:text-gray-200">
      <img
        className={`${
          number % 2 === 0 ? "md:order-1" : "md:order-0"
        } w-full md:w-1/2 h-full rounded-l-sm`}
        src={project.background.src}
        alt=""
      />

      <div className="relative w-full md:w-1/2 flex flex-col">
        <PatternShape />
        <div className="p-4 pb-0 flex-1">
          <h3 className="font-light mb-1 text-gray-900 dark:text-gray-200">
            {project.title}
          </h3>
          {/* <div className="text-xs flex items-center mb-4">
            <i className="fas fa-map-marker-alt mr-1 text-gray-dark"></i>
            Soho, London
          </div> */}
          {<RenderStack stacks={project.stack} />}
          <div className="flex items-center mt-4">
            <div className="pr-2 pb-4 md:pb-8 text-xs">
              {project.description}
            </div>
          </div>
        </div>
        <div className="bg-slate-200 dark:bg-gray-800/[0.8] dark:hover:bg-teal-500 hover:text-white p-3 flex items-center justify-between transition hover:bg-teal-500 cursor-pointer">
          View Project
          <ChevronRightIcon className="h-6 w-6" aria-hidden="true" />
        </div>
      </div>
    </li>
  );
};

export default Projects;
