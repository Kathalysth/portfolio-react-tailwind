import Image from "next/image";
import PatternShape from "../PatternShape";
const Projects = ({ project, number }) => {
  return (
    <div className="flex justify-center ">
      <div className="flex flex-col rounded-lg bg-white dark:bg-gray-900 shadow-sm dark:bg-neutral-700 md:max-w-4xl md:flex-row">
        {number % 2 !== 0 ? (
          <img
            className="h-96 max-h-80 w-full rounded-t-md object-cover md:h-auto md:w-1/2 md:rounded-none md:rounded-l-md"
            src={project.background.src}
            alt=""
          />
        ) : null}
        <div className="flex relative flex-col justify-start p-6 md:p-8 md:w-1/2 w-full bg-slate-200/[0.6] dark:bg-gray-800/[0.8]">
          <PatternShape />
          <h5 className="mb-2 text-xl font-bold text-neutral-800 dark:text-gray-200">
            {project.title}
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 w-full">
            {project.description}
          </p>
          <button
            type="button"
            className="rounded-md bg-teal-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            View Project
          </button>
        </div>
        {number % 2 === 0 ? (
          <img
            className="h-96 max-h-80 w-full rounded-t-md object-cover md:h-auto md:w-1/2 md:rounded-none md:rounded-r-md"
            src={project.background.src}
            alt=""
          />
        ) : null}
      </div>
    </div>
  );
};

export default Projects;
