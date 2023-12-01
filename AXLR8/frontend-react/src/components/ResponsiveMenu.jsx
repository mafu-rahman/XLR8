import { Disclosure } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ResponsiveMenu = ({ navigation, open, onSort }) => {
  const handleSort = (sortField) => {
    onSort(sortField);
  };

  return (
    <Disclosure.Panel className="sm:hidden">
      <div className="space-y-1 px-2 pt-2 pb-3">
        {navigation.map((item) => (
          <Disclosure.Button
            key={item.name}
            as="a"
            href={item.href}
            className={classNames(
              item.current
                ? "bg-gray-900 text-white"
                : "text-gray-300 hover:bg-gray-700 hover:text-white",
              "block rounded-md px-3 py-2 text-base font-medium"
            )}
            aria-current={item.current ? "page" : undefined}
          >
            {item.name}
          </Disclosure.Button>
        ))}
        <button
          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base w-full text-left font-medium"
          onClick={() => handleSort("price")}
        >
          Sort by Price
        </button>
        <button
          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base w-full text-left font-medium"
          onClick={() => handleSort("modelYear")}
        >
          Sort by Year
        </button>
      </div>
    </Disclosure.Panel>
  );
};

export default ResponsiveMenu;
