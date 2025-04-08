import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faSearch,
  faUser,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-3xl font-bold text-gray-800 hover:text-blue-600 transition-colors flex items-center"
          >
            <span className="bg-blue-600 text-white px-3 py-1 rounded-lg mr-2 text-2xl">
              NBO
            </span>
            <span className="hidden md:inline-block text-2xl">HOLDING</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <div className="group relative">
              <Link
                to="/"
                className="flex items-center py-3 text-gray-700 hover:text-blue-600 transition-colors text-lg font-medium"
              >
                <span>Services</span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="ml-2 text-xs group-hover:rotate-180 transition-transform"
                />
              </Link>
            </div>
            <Link
              to="/"
              className="py-3 text-gray-700 hover:text-blue-600 transition-colors text-lg font-medium"
            >
              Solutions
            </Link>
            <Link
              to="/"
              className="py-3 text-gray-700 hover:text-blue-600 transition-colors text-lg font-medium"
            >
              About Us
            </Link>
            <Link
              to="/"
              className="py-3 text-gray-700 hover:text-blue-600 transition-colors text-lg font-medium"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-6">
            <div className="hidden md:block relative w-56 lg:w-72">
              <input
                type="text"
                placeholder="Search..."
                className="w-full py-2.5 px-5 pr-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute right-5 top-3.5 text-gray-400 text-lg"
              />
            </div>

            <div className="flex items-center space-x-5">
              <Link
                to="/"
                className="p-3 hover:bg-gray-100 rounded-full transition-colors"
              >
                <FontAwesomeIcon
                  icon={faUser}
                  className="text-xl text-gray-700"
                />
              </Link>
              <Link
                to="/"
                className="p-3 hover:bg-gray-100 rounded-full transition-colors relative"
              >
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className="text-xl text-gray-700"
                />
                <span className="absolute -top-1 -right-1 text-xs font-bold bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center">
                  0
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
