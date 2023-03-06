export default function Hero() {
  return (
    <div className=" dark:bg-gray-900">
      <div className="relative px-6 lg:px-8">
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
      </div>
    </div>
  );
}
