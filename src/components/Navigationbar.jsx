import React from "react";
import { assets } from "../assets/assets";

export default function Navigationbar() {
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div>
        <img src={assets.logo} alt="" />

        <ul>
          <a href="" className="cursor-pointer hover:text-gray-700">
            Home
          </a>
          <a href="" className="cursor-pointer hover:text-gray-700">
            About
          </a>
          <a href="" className="cursor-pointer hover:text-gray-700">
            Project
          </a>
          <a href="" className="cursor-pointer hover:text-gray-700">
            Testimonials
          </a>
        </ul>
      </div>

      <h1>j</h1>
    </div>
  );
}
