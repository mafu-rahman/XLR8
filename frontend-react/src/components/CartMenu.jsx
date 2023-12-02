import { Fragment, useState } from "react";
import { Transition } from "@headlessui/react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import Cart from "./Cart";

const CartMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="text-white bg-gray-800 hover:bg-gray-700 focus:ring-2 focus:ring-opacity-75 focus:ring-white focus:outline-none font-medium rounded-md text-sm px-4 py-2 w-full justify-center inline-flex"
      >
        <span className="sr-only">Cart Menu</span>
        <ShoppingBagIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
      </button>
      <Transition
        show={open}
        as={Fragment}
        enter="duration-100 ease-out transition"
        leave="duration-75 ease-in transition"
        leaveFrom="scale-100 opacity-100 transform"
        leaveTo="scale-95 opacity-0 transform"
      >
        <div className="absolute right-0 mt-2">
          <Cart open={open} setOpen={setOpen} />
        </div>
      </Transition>
    </div>
  );
};

export default CartMenu;
