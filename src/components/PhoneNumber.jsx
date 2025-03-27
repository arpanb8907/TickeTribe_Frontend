import {React,useState} from "react";

import { IoClose } from "react-icons/io5"; // Importing close icon
import Otpmodal from './Otpmodal'

export default function PhoneNumber({ isOpen, onClose }) {
    const [show_otp_modal,setshow_otp_modal] = useState(false);
    const open_otp_modal = ()=>{
        setshow_otp_modal(true);
    }
  if (!isOpen) return null;


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-2xl shadow-2xl w-[22rem] relative">
        
        {/* Close Button */}
        <button className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition" onClick={onClose}>
          <IoClose size={24} />
        </button>

        <h2 className="text-2xl font-bold text-center mb-5 text-gray-800">
          Enter Your Mobile Number
        </h2>

        {/* Input Field with Better Design */}
        <div className="flex items-center border-2 border-gray-300 rounded-xl overflow-hidden focus-within:border-blue-500 bg-gray-100">
          <span className="px-4 bg-gray-200 text-gray-800 font-semibold text-lg">
            +91
          </span>
          <input
            type="tel"
            placeholder="Enter your phone number"
            className="w-full px-4 py-3 text-lg bg-transparent outline-none text-gray-900 placeholder-gray-500"
          />
        </div>

        {/* Get OTP Button */}
        <button className="mt-6 w-full bg-gradient-to-r from-red-500 to-red-700 text-white py-3 rounded-xl hover:opacity-90 transition font-semibold shadow-lg" onClick={open_otp_modal} >
          Get OTP
        </button>

        <Otpmodal isOpen={show_otp_modal} onClose = {()=>setshow_otp_modal(false)} />
       
      </div>
    </div>
  );
}
