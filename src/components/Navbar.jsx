import { Link } from "react-router-dom";
import { FaUserCircle, FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <h1 className="text-4xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-500 to-blue-500">
            TicketRibe
          </h1>
        </Link>

        {/* Navigation Links - Hidden on Small Screens */}
        <div className="hidden md:flex space-x-6 font-medium text-gray-300">
          <Link to="/" className="hover:text-red-500 transition">Home</Link>
          <Link to="/movies" className="hover:text-red-500 transition">Movies</Link>
          <Link to="/trains" className="hover:text-red-500 transition">Trains</Link>
          <Link to="/sports" className="hover:text-red-500 transition">Sports</Link>
          <Link to="/concerts" className="hover:text-red-500 transition">Concerts</Link>
        </div>

        {/* Sign In & Mobile Menu */}
        <div className="flex items-center space-x-4">
          <button className="hidden md:flex px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition">
            Sign In
          </button>

          {/* User Icon for Mobile */}
          <FaUserCircle className="text-2xl text-gray-300 md:hidden cursor-pointer hover:text-white transition" />

          {/* Hamburger Menu for Mobile (Without State - You can add logic) */}
          <FaBars className="text-2xl text-gray-300 md:hidden cursor-pointer hover:text-white transition" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
