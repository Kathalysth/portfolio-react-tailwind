export default function Hero() {
  return (
    <div className="isolate dark:bg-gray-900">
      <div className="relative px-6 lg:px-8">
        <div className="absolute right-0 top-0 -z-[1]">
          <svg
            width="450"
            height="556"
            viewBox="0 0 450 556"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="277"
              cy="63"
              r="225"
              fill="url(#paint0_linear_25:217)"
            ></circle>
            <circle
              cx="17.9997"
              cy="182"
              r="18"
              fill="url(#paint1_radial_25:217)"
            ></circle>
            <circle
              cx="76.9997"
              cy="288"
              r="34"
              fill="url(#paint2_radial_25:217)"
            ></circle>
            <circle
              cx="325.486"
              cy="302.87"
              r="180"
              transform="rotate(-37.6852 325.486 302.87)"
              fill="url(#paint3_linear_25:217)"
            ></circle>
            <circle
              opacity="0.8"
              cx="184.521"
              cy="315.521"
              r="132.862"
              transform="rotate(114.874 184.521 315.521)"
              stroke="url(#paint4_linear_25:217)"
            ></circle>
            <circle
              opacity="0.8"
              cx="356"
              cy="290"
              r="179.5"
              transform="rotate(-30 356 290)"
              stroke="url(#paint5_linear_25:217)"
            ></circle>
            <circle
              opacity="0.8"
              cx="191.659"
              cy="302.659"
              r="133.362"
              transform="rotate(133.319 191.659 302.659)"
              fill="url(#paint6_linear_25:217)"
            ></circle>
            <defs>
              <linearGradient
                id="paint0_linear_25:217"
                x1="-54.5003"
                y1="-178"
                x2="222"
                y2="288"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#14b8a6"></stop>
                <stop offset="1" stopColor="#14b8a6" stopOpacity="0"></stop>
              </linearGradient>
              <radialGradient
                id="paint1_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
              >
                <stop
                  offset="0.145833"
                  stopColor="#14b8a6"
                  stopOpacity="0"
                ></stop>
                <stop offset="1" stopColor="#14b8a6" stopOpacity="0.08"></stop>
              </radialGradient>
              <radialGradient
                id="paint2_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
              >
                <stop
                  offset="0.145833"
                  stopColor="#14b8a6"
                  stopOpacity="0"
                ></stop>
                <stop offset="1" stopColor="#14b8a6" stopOpacity="0.08"></stop>
              </radialGradient>
              <linearGradient
                id="paint3_linear_25:217"
                x1="226.775"
                y1="-66.1548"
                x2="292.157"
                y2="351.421"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#14b8a6"></stop>
                <stop offset="1" stopColor="#14b8a6" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:217"
                x1="184.521"
                y1="182.159"
                x2="184.521"
                y2="448.882"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#14b8a6"></stop>
                <stop offset="1" stopColor="white" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint5_linear_25:217"
                x1="356"
                y1="110"
                x2="356"
                y2="470"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#14b8a6"></stop>
                <stop offset="1" stopColor="white" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint6_linear_25:217"
                x1="118.524"
                y1="29.2497"
                x2="166.965"
                y2="338.63"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#14b8a6"></stop>
                <stop offset="1" stopColor="#14b8a6" stopOpacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-24">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div
              data-aos="fade-left"
              data-aos-once="true"
              className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 dark:text-gray-300 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:ring-gray-200/10"
            >
              Look me up on Github. See what i have been up to.{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/kathalysth"
                className="font-semibold text-teal-600"
              >
                <span className="absolute inset-0" aria-hidden="true" />
                Learn more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1
              data-aos="fade-up"
              data-aos-once="true"
              className=" text-4xl font-bold tracking-tight z-[2] text-gray-900 dark:text-gray-200 sm:text-6xl"
            >
              Transforming Ideas into Beautiful and Responsive Web{" "}
              <span className="bg-teal-600 rounded-xl pb-1 px-1 text-white z-[1]">
                apps
              </span>
              .
            </h1>
            <p
              data-aos="fade-right"
              data-aos-once="true"
              className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
            >
              As a skilled developer with a passion for clean code, design
              systems, and innovative solutions, I&apos;m ready to take on your
              next project.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#letsTalk"
                className="rounded-md bg-teal-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get in Touch
              </a>
              <a
                href="#about"
                className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200"
              >
                Read more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <svg
            className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
          >
            <path
              fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#14b8a6" />
                <stop offset={1} stopColor="#064e3b" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute left-0 bottom-0 -z-[1]">
          <svg
            width="364"
            height="201"
            viewBox="0 0 364 201"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
              stroke="url(#paint0_linear_25:218)"
            ></path>
            <path
              d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
              stroke="url(#paint1_linear_25:218)"
            ></path>
            <path
              d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
              stroke="url(#paint2_linear_25:218)"
            ></path>
            <path
              d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481"
              stroke="url(#paint3_linear_25:218)"
            ></path>
            <circle
              opacity="0.8"
              cx="214.505"
              cy="60.5054"
              r="49.7205"
              transform="rotate(-13.421 214.505 60.5054)"
              stroke="url(#paint4_linear_25:218)"
            ></circle>
            <circle
              cx="220"
              cy="63"
              r="43"
              fill="url(#paint5_radial_25:218)"
            ></circle>
            <defs>
              <linearGradient
                id="paint0_linear_25:218"
                x1="184.389"
                y1="69.2405"
                x2="184.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#14b8a6" stopOpacity="0"></stop>
                <stop offset="1" stopColor="#14b8a6"></stop>
              </linearGradient>
              <linearGradient
                id="paint1_linear_25:218"
                x1="156.389"
                y1="69.2405"
                x2="156.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#14b8a6" stopOpacity="0"></stop>
                <stop offset="1" stopColor="#14b8a6"></stop>
              </linearGradient>
              <linearGradient
                id="paint2_linear_25:218"
                x1="125.389"
                y1="69.2405"
                x2="125.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#14b8a6" stopOpacity="0"></stop>
                <stop offset="1" stopColor="#14b8a6"></stop>
              </linearGradient>
              <linearGradient
                id="paint3_linear_25:218"
                x1="93.8507"
                y1="67.2674"
                x2="89.9278"
                y2="210.214"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#14b8a6" stopOpacity="0"></stop>
                <stop offset="1" stopColor="#14b8a6"></stop>
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:218"
                x1="214.505"
                y1="10.2849"
                x2="212.684"
                y2="99.5816"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#14b8a6"></stop>
                <stop offset="1" stopColor="#14b8a6" stopOpacity="0"></stop>
              </linearGradient>
              <radialGradient
                id="paint5_radial_25:218"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(220 63) rotate(90) scale(43)"
              >
                <stop
                  offset="0.145833"
                  stopColor="white"
                  stopOpacity="0"
                ></stop>
                <stop offset="1" stopColor="white" stopOpacity="0.08"></stop>
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
