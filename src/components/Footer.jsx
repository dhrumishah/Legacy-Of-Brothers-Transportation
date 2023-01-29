import React from "react";
import image_3 from "../assets/footer.png";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="relative">
        <img
          src={image_3}
          className="absolute bg-no-repeat max-h-screen bg-cover bg-center z-[-1] top-0"
        />
        <img
          src={logo}
          className="absolute bg-no-repeat max-h-screen bg-cover bg-center z-[-1] w-1/5 border-none top-5 sm:w-[10%] md:w-[15%] md:left-[4rem] lg:w-[20%] lg:left-[5rem] xl:w-[22%] xl:left-[7rem]"
        />
        <div className="flex flex-row-reverse justify-items-end text-white sm:gap-2 md:gap-4 lg:gap-10 lg:px-[5rem] lg:text-base lg:pt-14 xl:gap-10 xl:px-[7rem] xl:text-lg xl:pt-16">
          <div>Online Store</div>
          <Link to="/culture">
            <div>Culture</div>
          </Link>
          <div className="flex flex-col gap-10">
            <div>Apply Here</div>
            <div>Terms of Use</div>
          </div>
          <div className="flex flex-col gap-10">
            <Link to="/contactus">
              <div>Contact Us</div>
            </Link>
            <div>Privacy Policy</div>
          </div>
          <div className="flex flex-col gap-10">
            <Link to="/aboutus">
              <div>About Us</div>
            </Link>
            <div>Social Media</div>
          </div>
          <div className="flex flex-col gap-5">
            <div>Company Address</div>
            <div className="text-xs font-light">
              <div>PO BOX 417</div>
              <div>Des Plaines Ave, unit 491</div>
              <div>Forest Park, Illinois 60130</div>
            </div>
          </div>
        </div>
        <div className="text-center text-white font-light xl:mt-[5rem] xl:text-2xl">
          Copyright © Legacy of Brothers Transportation
        </div>
      </div>
    </>
  );
};

export default Footer;
