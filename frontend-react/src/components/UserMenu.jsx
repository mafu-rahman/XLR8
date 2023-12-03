import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { UserIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const UserMenu = ({ toggleLogin, isLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("cartId");
    navigate("/");
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="text-white bg-gray-800 hover:bg-gray-700 focus:ring-2 focus:ring-opacity-75 focus:ring-white focus:outline-none font-medium rounded-md text-sm px-4 py-2 w-full justify-center inline-flex">
        <span className="sr-only">User Menu</span>
        <UserIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
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
          <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                className={`${
                  active ? "bg-gray-100" : ""
                } block px-4 py-2 text-sm text-gray-700`}
                onClick={handleLogout}
              >
                Sign out
              </a>
            )}
          </Menu.Item>
          {!isLoggedIn() && (
            <Menu.Item>
              <button
                className="block px-4 py-2 text-sm text-gray-700"
                onClick={toggleLogin}
              >
                Log in
              </button>
            </Menu.Item>
          )}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default UserMenu;
