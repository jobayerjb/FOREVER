import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [visible, setvisible] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between py-5 font-medium">
        <NavLink to={'/'}>
        <img src={assets.logo} className="w-36" alt="" />
        </NavLink>

        <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>HOME</p>
            <hr className="w-2/4  border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink
            to="/Collection"
            className="flex flex-col items-center gap-1"
          >
            <p>COLLECTION</p>
            <hr className="w-2/4  border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to="/About" className="flex flex-col items-center gap-1">
            <p>ABOUT</p>
            <hr className="w-2/4  border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to="/Contact" className="flex flex-col items-center gap-1">
            <p>CONTACT</p>
            <hr className="w-2/4  border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </ul>

        <div className="flex items-center gap-6">
          <img src={assets.search_icon} className="w-5 cursor-pointer" alt="" />

          <div className="group relative">
            <img
              src={assets.profile_icon}
              className="w-5 cursor-pointer gap-5"
              alt=""
            />
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-400 rounded">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p className="cursor-pointer hover:text-black">Order</p>
                <p className="cursor-pointer hover:text-black">Logout</p>
              </div>
            </div>
          </div>
          <Link to="/Cart" className="relative">
            <img
              className=" w-5 cursor-pointer gap-5 min-w-5"
              src={assets.cart_icon}
              alt=""
            />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
              12
            </p>
          </Link>
          <img
            onClick={() => setvisible(true)}
            src={assets.menu_icon}
            className="w-5 cursor-pointer sm:hidden"
            alt=""
          />
        </div>
        {/* sidebar menu for sm screen */}
        <div
          className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
            visible ? "w-full" : "w-0"
          }`}
        >
          <div className="flex flex-col text-gray-600">
            <div
              onClick={() => setvisible(false)}
              className="flex items-center gap-4 p-3 cursor-pointer"
            >
              <img
                src={assets.dropdown_icon}
                className="h-4 rotate-180"
                alt=""
              />
              <p>Back</p>
            </div>
            <NavLink
              onClick={() => setvisible(false)}
              className="py-2 pl-6 border-b hover:text-green-500  bg-neutral-300"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => setvisible(false)}
              className="py-2 pl-6 border-b hover:text-green-500  bg-neutral-300"
              to="/Collection"
            >
              Collection
            </NavLink>
            <NavLink
              onClick={() => setvisible(false)}
              className="py-2 pl-6 border-b hover:text-green-500  bg-neutral-300"
              to="/About"
            >
              About
            </NavLink>
            <NavLink
              onClick={() => setvisible(false)}
              className="py-2 pl-6 border-b hover:text-green-500  bg-neutral-300"
              to="/Contact"
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
