import { useState } from "react";
import {
  FaGoogle,
  FaMobileAlt,
  FaTimes,
  FaEnvelope,
  FaApple,
} from "react-icons/fa";
import PhoneNumber from "./PhoneNumber";

const SignIn = ({ isOpen, onClose }) => {

    const [phone_no_modal,setphone_no_modal] = useState(false);

  if (!isOpen) return null; // Hide when not active

   

    const open_phone_no_input = ()=>{
        setphone_no_modal(true);
    }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-sm relative animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <FaTimes size={18} />
        </button>

        {/* Heading */}
        <h2 className="text-xl font-bold text-center text-gray-800 mb-4">
          Get Started
        </h2>

        {/* Google Sign-In */}
        <button className="w-full flex items-center justify-center bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition">
          <FaGoogle className="mr-2" />
          Continue with Google
        </button>

        {/* Email Sign-In */}
        <button className="mt-3 w-full flex items-center justify-center bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-800 transition">
          <FaEnvelope className="mr-2" />
          Continue with Email
        </button>

        {/* Apple Sign-In */}
        <button className="mt-3 w-full flex items-center justify-center bg-black text-white py-2 rounded-lg hover:bg-gray-900 transition">
          <FaApple className="mr-2" />
          Continue with Apple
        </button>

        {/* Mobile OTP Sign-In */}
        <button className="mt-3 w-full flex items-center justify-center border border-gray-400 bg-white text-gray-800 py-2 rounded-lg hover:bg-gray-100 transition shadow-md" onClick={open_phone_no_input}>
          <FaMobileAlt className="mr-2 text-gray-800" />
          Continue with Mobile Number
        </button>

        <PhoneNumber isOpen={phone_no_modal} onClose={()=>setphone_no_modal(false)}></PhoneNumber>

        {/* Terms & Conditions */}
        <p className="mt-4 text-center text-xs text-gray-500">
          By continuing, you agree to our{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Terms & Privacy
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default SignIn;
