import {
  BeakerIcon,
  WrenchScrewdriverIcon,
  UserGroupIcon,
  ArrowPathIcon,
} from "@heroicons/react/20/solid";

export default function Skills({ dark }) {
  return (
    <div className="relative isolate overflow-hidden dark:bg-gray-900 px-6 py-8 sm:py-8 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 dark:stroke-gray-700 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg
            x="50%"
            y={-1}
            className="overflow-visible fill-gray-50 dark:fill-gray-800/[0.5]"
          >
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-teal-600 ">
                Skills
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-200">
                Expertise in Full-Stack Development and Agile Methodologies
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700 dark:text-gray-200">
                Delivering High-Quality Software Solutions for Complex Business
                Challenges
              </p>
            </div>
          </div>
        </div>
        <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src={`/app-screenshot-${dark ? "light" : "dark"}.png`}
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 dark:text-gray-200 lg:max-w-lg">
              <p>
                I am a results-driven software engineer with extensive
                experience in full-stack development and agile methodologies.
                Whether its building scalable web applications or developing
                custom software solutions, I am committed to delivering
                high-quality, efficient, and reliable software that meets the
                needs of clients and end-users. Take a look at my skills to see
                how I can help you solve complex business challenges and drive
                innovation.
              </p>
              <ul
                role="list"
                className="mt-8 space-y-8 text-gray-600 dark:text-gray-200"
              >
                <li className="flex gap-x-3">
                  <WrenchScrewdriverIcon
                    className="mt-1 h-5 w-5 flex-none text-teal-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900 dark:text-gray-200">
                      Full-Stack Development
                    </strong>{" "}
                    <ul>
                      <li>
                        Frontend: HTML, CSS, JavaScript, React,Spring,.Net, Vue
                      </li>
                      <li>Backend: Node.js, Python, C#, Java</li>
                      <li>
                        Database: MySQL,PostgreSQL, MongoDB, Firebase, AWS
                      </li>
                    </ul>
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowPathIcon
                    className="mt-1 h-5 w-5 flex-none text-teal-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900 dark:text-gray-200">
                      Agile Methodologies
                    </strong>{" "}
                    <ul>
                      <li>Scrum, Kanban, Lean</li>
                      <li>
                        Agile Project Management Tools: Jira, Trello, Asana,
                        Linear
                      </li>
                      <li>
                        Continuous Integration and Continuous Delivery (CI/CD)
                        Tools: Jenkins, GitHub, CircleCI
                      </li>
                    </ul>
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <BeakerIcon
                    className="mt-1 h-5 w-5 flex-none text-teal-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900 dark:text-gray-200">
                      Software Development Processes
                    </strong>{" "}
                    <ul>
                      <li>Requirements Gathering and Analysis</li>
                      <li>Software Design and Architecture</li>
                      <li>Test-Driven Development (TDD)</li>
                      <li>
                        DevOps and Cloud Infrastructure: Docker, Kubernetes,
                        AWS, Azure
                      </li>
                    </ul>
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <UserGroupIcon
                    className="mt-1 h-5 w-5 flex-none text-teal-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900 dark:text-gray-200">
                      Soft Skills
                    </strong>{" "}
                    <ul>
                      <li>Team Collaboration and Communication</li>
                      <li>Problem-Solving and Decision-Making</li>
                      <li>Project Management and Time Management</li>
                    </ul>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
