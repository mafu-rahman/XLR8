import SortMenu from "./SortMenu";
import { Link } from "react-router-dom";

const Navigation = ({ navigation, onSort }) => {
  return (
    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="text-white">ALX8</h1>
      </div>
      <div className="hidden sm:ml-6 sm:block">
        <div className="flex space-x-4">
          {navigation.map((item) => {
            return (
              <Link
                to={item.href || "#"}
                key={item.name}
                className={`${
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                } rounded-md px-3 py-2 text-sm font-medium`}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
