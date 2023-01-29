import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="px-2 sm:px-4 py-2.5 z-[2] relative">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="/" className="flex items-center">
          <img src={logo} className="w-10 sm:h-9" />
        </a>
        <div className="hidden w-full mr-[10rem] md:block md:w-auto">
          <ul className="flex flex-col p-2 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
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
      </div>
    </nav>
  );
};

export default Nav;
