import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.png";
import rectangle from "../assets/homeRectangle.png";
import rectangle2 from "../assets/rectangle.png";
import triangle2 from "../assets/homeTriangle2.png";
import triangle from "../assets/homeTriangle.png";
import whiteRect from "../assets/whiteRect.png";
import truck from "../assets/truck.png";
import truck2 from "../assets/truck2.jpg";
import { Link } from "react-router-dom";

const Nav2 = () => {
  const [navbar, setNavbar] = useState(false);
  const [show, setShow] = useState(false);

  let menuRef = useRef();

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

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <nav
      className={
        navbar
          ? "fixed w-full z-[2] bg-gray-200 sm:bg-black text-white"
          : "fixed w-full z-[2]"
      }
    >
      <div className="sm:hidden">
        <div className="flex">
          <div className="relative flex w-1/2">
            <img src={rectangle2} className=" w-[200%] h-12 -z-[1]" />
            <img src={triangle2} className=" w-7 h-12 right-[45.8%] z-[1]" />
            <Link to="/">
              <img
                className="absolute left-[35%] w-20 mx-auto z-10"
                src={logo}
              />
            </Link>
          </div>
          <Link to="/contact">
            <div className="flex w-1/2 ml-[6rem] mt-2">
              <img src={truck2} className="w-7 h-7 my-auto" />
              <span className=" text-[0.9rem] px-2 my-auto text-[grey] font-semibold italic">
                DRIVERS
              </span>
            </div>
          </Link>
        </div>
        <div className="relative flex justify-center bg-[#F8DA78]">
          <div className="mt-2 ">
            <span className=" text-[0.95rem]  text-[grey] font-extrabold italic">
              MENU
            </span>
          </div>
          <div>
            <button
              data-collapse-toggle="navbar-hamburger"
              type="button"
              class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg   "
              aria-controls="navbar-hamburger"
              aria-expanded="false"
              onClick={() => setShow(!show)}
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div
              class={
                show
                  ? "w-max opacity-85 left-[45%] absolute bg-gray-50"
                  : "hidden"
              }
              id="navbar-hamburger"
              ref={menuRef}
            >
              <ul class="flex flex-col mt-4 rounded-lg bg-gray-50 opacity-80">
                <li>
                  <a
                    href="/"
                    class="block py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-600  hover:text-white"
                    aria-current="page"
                    onClick={() => setShow(false)}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/aboutus"
                    class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-600  hover:text-white"
                    onClick={() => setShow(false)}
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/culture"
                    class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-600  hover:text-white"
                    onClick={() => setShow(false)}
                  >
                    Culture
                  </a>
                </li>
                <li>
                  <a
                    href="/shop"
                    class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-600  hover:text-white"
                    onClick={() => setShow(false)}
                  >
                    Shop
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-600  hover:text-white"
                    onClick={() => setShow(false)}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:flex invisible hidden justify-between sm:visible">
        <a href="/" className="">
          <img src={logo} className="w-12" />
        </a>
        <div className="flex">
          <div className="m-auto flex gap-4 text-[0.6rem] font-semibold italic">
            <a href="/" className="">
              <span className="hover:text-[#FAD979] transition-all duration-200">
                Home
              </span>
            </a>
            <a href="/aboutus" className="">
              <span className="hover:text-[#FAD979] transition-all duration-200">
                About Us
              </span>
            </a>
            <a href="/culture" className="">
              <span className="hover:text-[#FAD979] transition-all duration-200">
                Culture
              </span>
            </a>
            <a href="/shop" className="">
              <span className="hover:text-[#FAD979] transition-all duration-200">
                Shop
              </span>
            </a>
            <a href="/contact" className="">
              <span className="hover:text-[#FAD979] transition-all duration-200">
                Contact
              </span>
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
