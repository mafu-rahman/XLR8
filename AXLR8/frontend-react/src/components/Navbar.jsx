import { Disclosure } from "@headlessui/react";
import MenuButton from "./MenuButton";
import Navigation from "./Navigation";
import UserMenu from "./UserMenu";
import ResponsiveMenu from "./ResponsiveMenu";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Filter", href: "#", current: false },
  { name: "Sort", href: "#", current: false },
];

export default function Navbar({ onSort }) {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <MenuButton open={open} />
              <Navigation navigation={navigation} onSort={onSort} />
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <UserMenu />
              </div>
            </div>
          </div>
          <ResponsiveMenu navigation={navigation} open={open} onSort={onSort} />
        </>
      )}
    </Disclosure>
  );
}
