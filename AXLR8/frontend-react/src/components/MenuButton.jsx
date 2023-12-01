import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const MenuButton = ({ open }) => {
  return (
    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
      <Disclosure.Button className="p-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white rounded-md text-gray-400 hover:text-white inline-flex items-center justify-center">
        <span className="sr-only">Menu</span>
        {open ? (
          <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
        ) : (
          <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
        )}
      </Disclosure.Button>
    </div>
  );
};

export default MenuButton;
