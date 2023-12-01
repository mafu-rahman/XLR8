import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const SortMenu = ({ onSort }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="text-white bg-gray-800 hover:bg-gray-700 focus:ring-2 focus:ring-opacity-75 focus:ring-white focus:outline-none font-medium rounded-md text-sm px-4 py-2 w-full justify-center inline-flex">
        Sort
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="duration-100 ease-out transition"
        enterFrom="scale-95 opacity-0 transform"
        enterTo="scale-100 opacity-100 transform"
        leave="duration-75 ease-in transition"
        leaveFrom="scale-100 opacity-100 transform"
        leaveTo="scale-95 opacity-0 transform"
      >
        <Menu.Items className="absolute bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none mt-2 w-56 origin-top-right right-0">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                  onClick={() => onSort("price")}
                >
                  Sort by Price
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                  onClick={() => onSort("modelYear")}
                >
                  Sort by Year
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default SortMenu;
