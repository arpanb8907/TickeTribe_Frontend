import React from "react";
import { IoClose } from "react-icons/io5";

export default function Otpmodal({isOpen,onClose}) {

    if(!isOpen) return null;
    
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-2xl shadow-2xl w-[22rem] relative">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition"
          onClick={onClose}
        >
          <IoClose size={24} />
        </button>

        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
          Enter OTP
        </h2>

        <p className="text-center text-gray-600 text-sm mb-4">
          We've sent a 6-digit OTP to your mobile number.
        </p>

        {/* OTP Input Fields */}
        <div className="flex justify-between mb-6">
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                className="w-12 h-12 text-center text-lg font-semibold border-2 border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:bg-gray-100"
              />
            ))}
        </div>

        {/* Verify OTP Button */}
        <button className="w-full bg-gradient-to-r from-green-500 to-green-700 text-white py-3 rounded-xl hover:opacity-90 transition font-semibold shadow-lg">
          Verify OTP
        </button>

        {/* Resend OTP */}
        <p className="text-center text-gray-600 text-sm mt-4">
          Didn't receive the code?{" "}
          <button className="text-blue-500 font-semibold hover:underline">
            Resend OTP
          </button>
        </p>
      </div>
    </div>
  );
}
