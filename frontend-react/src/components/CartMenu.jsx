import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import Cart from "./Cart";

const CartMenu = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="text-white bg-gray-800 hover:bg-gray-700 focus:ring-2 focus:ring-opacity-75 focus:ring-white focus:outline-none font-medium rounded-md text-sm px-4 py-2 w-full justify-center inline-flex">
        <span className="sr-only">Cart Menu</span>
        <ShoppingBagIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
      </Menu.Button>
      <Transition as={Fragment} enter="ease-in-out" leave="ease-in-out">
        <Menu.Items className="absolute right-0 mt-2 origin-top-right">
          <Cart />
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default CartMenu;
