import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Projects = ({ project, number }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col rounded-lg bg-white dark:bg-gray-900 shadow-sm dark:bg-neutral-700 md:max-w-4xl md:flex-row">
        <img
          className="h-96 max-h-80 w-full rounded-t-md object-cover md:h-auto md:w-1/2 md:rounded-none md:rounded-l-md"
          src={project.background.src}
          alt=""
        />
        <div className="flex flex-col justify-start p-6 md:p-8 md:w-1/2 w-full bg-slate-50">
          <h5 className="mb-2 text-xl font-bold text-neutral-800 dark:text-neutral-50">
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
      </div>
    </div>
  );
  return (
    <div className="w-full flex flex-wrap  gap-2 p-4  items-center cursor-pointer  relative overflow-hidden bg-no-repeat bg-cover">
      {number % 2 !== 0 ? (
        <div
          data-aos="fade-right"
          data-aos-once="true"
          className="w-full md:w-4/12 order-2 md:order-1 dark:text-white"
        >
          <h3 className="font-bold text-4xl">{project.title}</h3>
          <p className="pb-4 text-teal-600">{project.stack.join(" ")}</p>
          <p>{project.description}</p>
        </div>
      ) : null}
      <div className="w-full  h-80 order-1 md:order-1 md:w-7/12 relative">
        <Image
          data-aos="fade-left"
          data-aos-once="true"
          className="w-full"
          layout="fill"
          objectFit="contain"
          alt={`Photo of ${project.title}`}
          src={project.background.src}
        />
      </div>
      {number % 2 === 0 ? (
        <div className="w-full md:w-4/12 order-2 md:order-1 dark:text-white">
          <h3 className="font-bold text-4xl">{project.title}</h3>
          <p className="pb-4 text-teal-600">{project.stack.join(" ")}</p>
          <p>{project.description}</p>
        </div>
      ) : null}
      {/* <div class="rounded-lg p-2 text-center text-white absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out bg-teal-500">
        <h3>{project.title}</h3>
        <p className="pb-4">{project.stack.join(" ")}</p>
        <p>{project.description}</p>
      </div> */}
    </div>
  );
};

export default Projects;
