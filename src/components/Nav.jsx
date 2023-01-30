import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import rectangle from "../assets/homeRectangle.png";
import triangle from "../assets/homeTriangle.png";
import truck from "../assets/truck.png";

const Nav = () => {
  return (
    <nav className="fixed pl-[1.65rem] z-[2]">
      <div className="container flex flex-wrap items-center mx-auto">
        <a href="/" className="flex items-center">
          <img src={logo} className="w-10 sm:h-9" />
        </a>
        <div className="hidden w-full md:block md:ml-[14rem] md:w-auto">
          <ul className="flex flex-col p-1 md:flex-row md:space-x-6 md:mr-4 md:mt-0 md:text-[0.6rem] md:font-medium lg:text-[0.55rem] lg:mr-6">
            <li>
              <a
                href="/aboutus"
                className="block py-2 pl-3 pr-4 italic font-bold text-white md:p-0 "
              >
                ABOUT US
              </a>
            </li>
            <li>
              <a
                href="/culture"
                className="block py-2 pl-3 pr-4 italic font-bold text-white md:p-0 "
              >
                CULTURE
              </a>
            </li>
            <li>
              <a
                href="/shop"
                className="block py-2 pl-3 pr-4 italic font-bold text-white md:p-0 "
              >
                SHOP
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="block py-2 pl-3 pr-4 italic font-bold text-white md:p-0 "
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
        <div className="flex">
          <img src={triangle} className="w-4 -mt-[0.4rem] " />
          <div className="relative">
            <img src={rectangle} className="w-[4.3rem] -mt-[0.4rem]" />
            <img
              src={truck}
              className="absolute w-[0.75rem] top-0 right-[3.3rem]"
            />
            <h1 className="absolute top-0 right-2 text-[#F8DA78] italic text-[0.55rem]">
              DRIVERS
            </h1>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
