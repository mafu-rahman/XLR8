import { Disclosure } from "@headlessui/react";
import MenuButton from "./MenuButton";
import Navigation from "./Navigation";
import UserMenu from "./UserMenu";
import ResponsiveMenu from "./ResponsiveMenu";
import CartMenu from "./CartMenu";
import SortMenu from "./SortMenu";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Hot Deals", href: "/hot-deals", current: false },
  { name: "Loan Calculator", href: "/loan-calculator", current: false },
];

export default function Navbar({ onSort, toggleLogin, isLoggedIn, toggleSignup }) {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <MenuButton open={open} />
              <Navigation navigation={navigation} onSort={onSort} />
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <SortMenu onSort={onSort} />
                <UserMenu toggleLogin={toggleLogin} toggleSignup={toggleSignup} isLoggedIn={isLoggedIn} />
                <CartMenu isLoggedIn={isLoggedIn}/>
              </div>
            </div>
          </div>
          <ResponsiveMenu navigation={navigation} open={open} onSort={onSort} />
        </>
      )}
    </Disclosure>
  );
}
