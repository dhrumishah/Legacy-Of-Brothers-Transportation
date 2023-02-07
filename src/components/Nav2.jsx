import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import rectangle from "../assets/homeRectangle.png";
import triangle from "../assets/homeTriangle.png";
import truck from "../assets/truck.png";
import { Link } from "react-router-dom";

const Nav2 = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 6) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <nav
      className={
        navbar ? "fixed w-full z-[2] bg-black text-white" : "fixed w-full z-[2]"
      }
    >
      <div className="flex justify-between">
        <a href="/" className="">
          <img src={logo} className="w-12" />
        </a>
        <div className="flex">
          <div className="m-auto flex gap-4 text-xs font-semibold italic">
            <a href="/aboutus" className="">
              <span className="">About Us</span>
            </a>
            <a href="/culture" className="">
              <span className="">Culture</span>
            </a>
            <a href="/shop" className="">
              <span className="">Shop</span>
            </a>
            <a href="/contact" className="">
              <span className="">Contact</span>
            </a>
          </div>
          <Link to="/contact">
            <div className="flex relative cursor-pointer">
              <img src={triangle} className="w-4" />
              <img src={rectangle} className="w-16" />
              <img src={truck} className="absolute w-3 top-[20%] left-[20%]" />
              <span className="absolute text-[0.55rem] top-[25%] left-[40%] text-[#F8DA78] font-semibold italic">
                DRIVERS
              </span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav2;
