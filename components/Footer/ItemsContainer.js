import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/20/solid";
import Item from "./Item";
import { RESOURCES, COMPANY, SUPPORT } from "./Menus";

const ItemsContainer = () => {
  return (
    <div className="w-full flex flex-col md:flex-row sm:px-8 px-5 py-16">
      <div className="w-full md:w-1/3 mb-8 md:mb-0 overflow-hidden break-words pr-2">
        <h2 className="text-3xl font-bold tracking-tight text-gray-600 dark:text-white sm:text-4xl">
          Lets Talk!
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-400">Contact Info</p>
        <div className="mt-4 flex  items-center gap-2 font-medium text-gray-500 dark:text-gray-200">
          <EnvelopeIcon
            className="h-5 w-5 flex-none text-gray-500 dark:text-gray-200"
            aria-hidden="true"
          />
          ambyehigimetor@gmail.com
        </div>
        <div className="mt-1 flex  items-center gap-2 font-medium text-gray-500 dark:text-gray-200">
          <MapPinIcon
            className="h-5 w-5 flex-none text-gray-500 dark:text-gray-200"
            aria-hidden="true"
          />
          Plot 9549 Danube Estate, Maitama, Abuja.
        </div>
        <div className="mt-1  flex  items-center gap-2 font-medium text-gray-500 dark:text-gray-200">
          <PhoneIcon
            className="h-5 w-5 flex-none text-gray-500 dark:text-gray-200"
            aria-hidden="true"
          />
          +234-8169-744-390
        </div>
      </div>
      <div className="w-2/3 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 ">
        <Item Links={RESOURCES} title="What I Do?" />
        <Item Links={COMPANY} title="News" />
        <Item Links={SUPPORT} title="Quick Links" />
      </div>
    </div>
  );
};

export default ItemsContainer;
