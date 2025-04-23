import { Link } from "react-router-dom";
import { FaUserCircle, FaBars } from "react-icons/fa";
import { useState } from "react";
import { useAuth } from "../context/Authcontext";
import SignIn from "./SignIn";

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();
  const [showmodal, setshowmodal] = useState(false);
  const [showConfirmLogout, setshowConfirmLogout] = useState(false);

  const toggle_modal = () => {
    setshowmodal(true);
  };

  const handleLogoutClick = () => {
    setshowConfirmLogout(true);
  };

  const confirmLogout = () => {
    logout();
    setshowConfirmLogout(false);
  };

  const cancelLogout = () => {
    setshowConfirmLogout(false);
  };

  return (
    <>
      <nav className="bg-gray-900 text-white fixed top-0 left-0 w-full z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-4xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-500 to-blue-500">
              TicketRibe
            </h1>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6 font-medium text-gray-300">
            <Link to="/" className="hover:text-red-500 transition">Home</Link>
            <Link to="/movies" className="hover:text-red-500 transition">Movies</Link>
            <Link to="/trains" className="hover:text-red-500 transition">Trains</Link>
            <Link to="/sports" className="hover:text-red-500 transition">Sports</Link>
            <Link to="/concerts" className="hover:text-red-500 transition">Concerts</Link>
            <Link to="/buses" className="hover:text-red-500 transition">Buses</Link>
          </div>

          {/* Auth Buttons & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <Link
                  to="/account"
                  className="hidden md:flex px-4 py-2 bg-white text-red-600 border border-red-600 hover:bg-red-100 font-semibold rounded-lg transition duration-200"
                >
                  My Account
                </Link>
                <button
                  onClick={handleLogoutClick}
                  className="hidden md:flex px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition duration-200"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  className="hidden md:flex px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition"
                  onClick={toggle_modal}
                >
                  Sign In
                </button>
                <SignIn isOpen={showmodal} onClose={() => setshowmodal(false)} />
              </>
            )}
            {/* Mobile Icons */}
            <FaUserCircle className="text-2xl text-gray-300 md:hidden cursor-pointer hover:text-white transition" />
            <FaBars className="text-2xl text-gray-300 md:hidden cursor-pointer hover:text-white transition" />
          </div>
        </div>
      </nav>

      {/* Confirm Logout Modal */}
      {showConfirmLogout && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl max-w-sm w-full text-center space-y-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Are you sure you want to log out?
            </h2>
            <div className="flex justify-center space-x-4">
              <button
                onClick={confirmLogout}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              >
                Yes
              </button>
              <button
                onClick={cancelLogout}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
