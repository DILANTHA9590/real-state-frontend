import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";

export default function Navigationbar() {
  const [showMobileMenu, setMobileMenu] = useState(false);
  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showMobileMenu]);
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4">
        <img src={assets.logo} alt="" />

        <ul className="hidden md:flex gap-7">
          <a href="#Header" className="cursor-pointer hover:text-gray-700">
            Home
          </a>
          <a href="#About" className="cursor-pointer hover:text-gray-700">
            About
          </a>
          <a href="#Projects" className="cursor-pointer hover:text-gray-700">
            Project
          </a>
          <a
            href="#Testimonials"
            className="cursor-pointer hover:text-gray-700"
          >
            Testimonials
          </a>
        </ul>

        <button className="hidden md:block bg-white px-8 py-2 rounded-full">
          Sign Up
        </button>

        <div className="md:hidden">
          <img
            onClick={() => setMobileMenu(true)}
            src={assets.menu_icon}
            alt=""
            className=" md:hidden w-7 cursor-pointer"
          />
        </div>
      </div>

      {/* ------------------mobile menu----------- */}
      <div
        className={` md:hidden ${
          showMobileMenu ? "fixed w-full" : "h-0 w-0"
        }  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}
      >
        <div className="flex justify-end p-6  ">
          <img
            onClick={() => setMobileMenu(false)}
            src={assets.cross_icon}
            alt=""
            className="cursor-pointer"
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg  font-medium">
          <a
            onClick={() => setMobileMenu(true)}
            href=""
            className="px-4 py2 rounded-full"
          >
            Home
          </a>
          <a
            href="#About"
            onClick={() => setMobileMenu(true)}
            className="px-4 py2 rounded-full"
          >
            About
          </a>
          <a
            href="#Projects"
            onClick={() => setMobileMenu(true)}
            className="px-4 py2 rounded-full"
          >
            Projects
          </a>
          <a
            href="  #Testamonials"
            onClick={() => setMobileMenu(true)}
            className="px-4 py2 rounded-full"
          >
            Testamonials
          </a>
        </ul>
      </div>
    </div>
  );
}
