import Projects from "./Projects";
import { projects } from "../../projects";

function Project() {
  return (
    <section id="projects" className="py-10">
      <div className="pt-12 sm:py-32">
        <div className="mx-auto max-w-7xl px-2 lg:px-8">
          <div className="mx-auto max-w-5xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-teal-600">
              Creative works
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-200">
              Recent Works
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              I take great pride in my recent projects, each of which
              demonstrates my creativity, attention to detail, and passion for
              software engineering. From responsive web design to custom API
              development, I have tackled a wide range of challenges and
              delivered exceptional results. Explore my recent projects below.
            </p>
          </div>
        </div>
      </div>
      <div className="flex py-10 md:max-w-4xl mx-auto">
        <ul className="w-full flex flex-col justify-center gap-8 ">
          {projects.map((project, index) => (
            <Projects
              key={`${project.title}-${index}`}
              project={project}
              number={index + 1}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Project;
