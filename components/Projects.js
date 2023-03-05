import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Projects = ({ project, number }) => {
  useEffect(() => {
    AOS.init();
  }, []);
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
