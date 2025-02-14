import React from "react";
import Navigationbar from "./Navigationbar";
import { assets } from "../assets/assets";
export default function Header() {
  return (
    <div
      className="min-h-screen  bg-cover bg-center flex items-center w-full overflow-hidden mb-4 "
      style={{ backgroundImage: "url('/header_img.png')" }}
      id="Header "
    >
      <Navigationbar />

      <div className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white ">
        <h2 className="text-5xl sm:text-6xl md:text-[82px] inline-block">
          Explore homes that fit your dreams
        </h2>
        <div className="space-x-6 mt-6">
          <a href="#Projects" className="border border-white px-8 py-3 rounded">
            Projects
          </a>
          <a href="#Context" className=" bg-blue-500  px-8 py-3 rounded">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
