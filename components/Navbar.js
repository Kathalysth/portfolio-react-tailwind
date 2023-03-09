import { useState, Fragment } from "react";
import { Menu, Transition, Dialog, Switch } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  DocumentChartBarIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#letsTalk" },
];

function Navbar({ dark, setDark }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="px-6 bg-white/[0.8] dark:bg-gray-900 backdrop-blur z-10 sticky top-0 py-4 lg:px-8">
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
            role="button"
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
              className="text-sm font-semibold leading-6 text-gray-900 dark:text-white hover:bg-slate-200/[0.4] dark:hover:bg-gray-800 dark:hover:text-teal-600 hover:text-teal-500 rounded-lg p-2"
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
                  className="ml-2 -mr-1 h-5 w-5 text-teal-200 hover:text-teal-100"
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
                        role="button"
                        className={`${
                          active
                            ? "bg-slate-100 text-white"
                            : "text-gray-900 dark:text-gray-200"
                        } group hover:bg-slate-100 dark:hover:bg-gray-700 hover:text-teal-500 flex gap-5 w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        <DocumentDuplicateIcon
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                        Download CV PDF
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        role="button"
                        className={`${
                          active
                            ? "bg-slate-100 text-white"
                            : "text-gray-900 dark:text-gray-200"
                        } group hover:bg-slate-100 dark:hover:bg-gray-700 hover:text-teal-500 flex gap-5 w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        <DocumentChartBarIcon
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
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
        <Dialog.Panel
          className={`${
            dark ? "dark" : ""
          } fixed inset-0 z-10 overflow-y-auto bg-gray-300 dark:bg-gray-900 px-6 py-6 lg:hidden`}
        >
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Chris Ehigimetor</span>
              Chris Ehigimetor
            </a>
            <button
              type="button"
              role="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon
                className="h-6 w-6 stroke-gray-800"
                aria-hidden="true"
              />
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
              <div className="py-6 flex gap-4 items-center">
                Dark Mode
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
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

export default Navbar;
