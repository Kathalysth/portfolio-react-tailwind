import { useState, Fragment } from "react";
import { Menu, Transition, Dialog, Switch } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#letsTalk" },
];

export default function Hero({ dark, setDark }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="isolate  dark:bg-gray-900">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
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
      <div className="px-6 pt-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Global">
          <div className="flex lg:flex-1 dark:text-white">
            <a href="#" className="-m-1.5 p-1.5 uppercase">
              <span className="sr-only">Chris Ehigimetor</span>
              Chris Ehigimetor
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900 dark:text-white hover:bg-slate-100/[0.4] hover:text-teal-500 rounded-lg p-2"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex items-center gap-4 lg:flex-1 lg:justify-end">
            <Switch
              checked={dark}
              onChange={setDark}
              className={`${
                dark ? "bg-teal-600" : "bg-gray-200"
              } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span className="sr-only">Enable notifications</span>
              <span
                className={`${
                  dark ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center rounded-md bg-slate-100/[0.8] dark:text-teal-300 dark:bg-gray-800/[0.8] px-4 py-2 text-sm font-medium text-gray-800 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                  Download Assets
                  <ChevronDownIcon
                    className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white dark:bg-gray-800/[0.8] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1 ">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-slate-100 text-white"
                              : "text-gray-900 dark:text-gray-200"
                          } group hover:bg-slate-100 hover:text-teal-500 cursor-pointer flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          Download CV PDF
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-violet-500 text-white"
                              : "text-gray-900 dark:text-gray-200"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          Download CV Docx
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </nav>
        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-white dark:bg-gray-900 px-6 py-6 lg:hidden">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Chris Ehigimetor</span>
                Chris Ehigimetor
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
      <main>
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
                className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-6xl"
              >
                Transforming Ideas into Beautiful and Responsive Web{" "}
                <span className="bg-teal-600 rounded-xl pb-1 px-1 text-white">
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
                systems, and innovative solutions, I am ready to take on your
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
      </main>
    </div>
  );
}
