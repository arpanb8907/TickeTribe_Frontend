import React, { useState, useRef } from "react";
import { IoClose } from "react-icons/io5";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/Authcontext";


export default function Otpmodal({ isOpen, onClose, phone_no }) {
  const [inputs, setinputs] = useState(Array(6).fill(""));
  const [message, setmessage] = useState("");
  const inputsRef = useRef([]);
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const [success,setsuccess] = useState(false);
  const {login} = useAuth();
  const API_BASE_URL =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_PRODUCTION_API_URL
      : process.env.REACT_APP_API_BASE_URL;

  const handleinputchange = (index, value) => {
    const newinputs = [...inputs];
    if (/^\d?$/.test(value)) {
      // allow only single digit
      newinputs[index] = value;
      setinputs(newinputs);

      // Auto focus next box
      if (value && index < inputsRef.current.length - 1) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !inputs[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const verify_OTP = async () => {
    const otp = inputs.join("");
    const endpoint = "/verify-otp";
    //console.log(phone_no);
    setloading(true);
    
    try {
      const response = await axios.post(
        `${API_BASE_URL}${endpoint}`,
        {
          otp,
          phone: phone_no,
        },
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {

        const {token,user} = response.data
        login(token,user)

        setmessage("OTP verification successfull ✅");
        setsuccess(true);

        setTimeout(() => {
          onClose();
          navigate("/");
          setloading(false);
          setsuccess(false)
        }, 3000);
      } else {
        setloading(false)
        setmessage("Invalid OTP ❌");
      }
    } catch (error) {
      setloading(false)
      console.error(error);
      setmessage("Something went wrong ⚠️");
    }
  };

  if (!isOpen) return null;

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
                ref={(el) => (inputsRef.current[index] = el)}
                type="text"
                maxLength="1"
                value={inputs[index]}
                onChange={(e) => handleinputchange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 text-center text-lg font-semibold border-2 border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:bg-gray-100 text-gray-900 placeholder-gray-500"
              />
            ))}
        </div>

        {/* Verify OTP Button */}
        <button
          className="w-full bg-gradient-to-r from-green-500 to-green-700 text-white py-3 rounded-xl hover:opacity-90 transition font-semibold shadow-lg"
          onClick={verify_OTP}
        >
          Verify OTP
        </button>

        {/* Resend OTP */}
        <p className="text-center text-gray-600 text-sm mt-4">
          Didn't receive the code?{" "}
          <button className="text-blue-500 font-semibold hover:underline">
            Resend OTP
          </button>
        </p>

        {loading && (
          <div className="flex justify-center mt-4">
            <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {/* Message Box */}
        {message && (
          <div
            className={`mt-4 p-3 rounded-lg text-center font-medium ${
              success
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
}
