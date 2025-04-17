import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="w-full flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my10 mt-40 text-sm">
        <div>
          <Link to={"/"}>
            <img src={assets.logo} alt="logo" className="w-32 mb-5" />
          </Link>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-medium mb-5 uppercase"> company</h2>
          <ul className="flex flex-col gap-1 text-grey-600">
            <li className="uppercase font-semibold hover:text-green-500 transition-all duration-300 cursor-pointer">home</li>
            <li className="uppercase font-semibold hover:text-green-500 transition-all duration-300 cursor-pointer">about us</li>
            <li className="uppercase font-semibold hover:text-green-500 transition-all duration-300 cursor-pointer">delivery</li>
            <li className="uppercase font-semibold hover:text-green-500 transition-all duration-300 cursor-pointer">privacy policy</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-medium mb-5 uppercase">get in touch</h2>
          <ul>
            <li  className="uppercase font-semibold hover:text-green-500 transition-all duration-300 cursor-pointer mb-3" >+8801902971706</li>
            <li  className="uppercase font-semibold hover:text-green-500 transition-all duration-300 cursor-pointer mb-3" >Jobaerhasan@gmail.com</li>
            <li  className="uppercase font-semibold hover:text-green-500 transition-all duration-300 cursor-pointer mb-3" >instagram</li>
          </ul>
        </div>
        
        
      </div>
      <div className="py-5 text-center font-semibold ">
          <hr />
          <p className="mt-2">Copyright 2025@ greatstack.dev - All Right Reserved.</p>
        </div>
    </>
  );
};

export default Footer;
