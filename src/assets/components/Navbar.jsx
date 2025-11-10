import { MapPin } from "lucide-react";
import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { SignedOut, SignedIn, SignInButton, UserButton } from "@clerk/clerk-react";
import { CgClose } from "react-icons/cg";

const Navbar = ({location, getLocation, openDropDown, setOpenDropDown}) => {
  
  const toggleDropdown = () => {
    setOpenDropDown(!openDropDown)
  }

  return (
    <div className="bg-white py-3 shadow-2xl">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* logo Section */}
        <div className="flex gap-10 items-center">
          <Link to={"/"}>
            <h1 className="font-bold text-3xl font-serif">
              <span className="text-red-500">Z</span>aptro
            </h1>
          </Link>

          <div className="flex gap-1 cursor-pointer text-gray-700 items-center">
            <MapPin className="text-red-500" />
            <span className="font-semibold">
              {location ? <div className="-space-y-2">
                <p>{location.quarter}</p>
                <p>{location.state}</p>
              </div> : "Add Address"}
            </span>
            <FaCaretDown onClick={toggleDropdown}/>
          </div>
        </div>
        {
          openDropDown ? <div className="w-[250px] h-max shadow-2xl z-50 bg-white fixed top-16 left-60 border-2 p-5 border-gray-100 rounded-md">
          <h1 className="font-semibold mb-4 text-xl flex justify-baseline">Change Location <span><CgClose onClick={toggleDropdown}/></span></h1>
          <button onClick={getLocation} className="bg-red-500 text-white px-4 p-2 rounded-md cursor-pointer hover:bg-red-600">Detect my location</button>
          </div> : null
        }

        {/* menu Section */}
        <nav className="flex gap-7 items-center">
          <ul className="flex gap-7 items-center text-xl font-semibold">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-3 border-red-500 transition-all duration-75 ease-in-out"
                    : ""
                } cursor-pointer`
              }
            >
              <li>Home</li>
            </NavLink>

            <NavLink
              to={"/products"}
              className={({ isActive }) =>
                `${isActive ? "border-b-3 border-red-500" : ""} cursor-pointer`
              }
            >
              <li>Products</li>
            </NavLink>

            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                `${isActive ? "border-b-3 border-red-500" : ""} cursor-pointer`
              }
            >
              <li>About</li>
            </NavLink>

            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                `${isActive ? "border-b-3 border-red-500" : ""} cursor-pointer`
              }
            >
              <li>Contact</li>
            </NavLink>
          </ul>

          <Link to={"/cart"} className="relative">
            <IoCartOutline className="h-6 w-6" />
            <span className="bg-red-500 px-2 rounded-full absolute -top-3 -right-3 text-white">
              0
            </span>
          </Link>

          <div>
            <SignedOut>
              <SignInButton className="bg-red-500 text-white px-4 y-2 rounded-md cursor-pointer" />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
