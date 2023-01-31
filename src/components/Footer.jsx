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
          className="bg-no-repeat max-h-screen bg-cover bg-center z-[-1]"
        />
        <img
          src={logo}
          className="absolute bg-no-repeat max-h-screen bg-cover bg-center  w-[18%] border-none top-4 left-7 sm:left-12 md:left-12 lg:left-16"
        />
        <div className="absolute flex flex-row-reverse text-[0.65rem] pt-6 gap-5 mr-6 justify-items-end text-white sm:gap-3 sm:text-[0.65rem] md:gap-3 md:text-[0.6rem] lg:gap-4 lg:text-[0.6rem] xl:text-[0.55rem]">
          <div>Online Store</div>
          <Link to="/culture">
            <div>Culture</div>
          </Link>
          <div className="flex flex-col gap-3">
            <div>Apply Here</div>
            <div>Terms of Use</div>
          </div>
          <div className="flex flex-col gap-3">
            <Link to="/contactus">
              <div>Contact Us</div>
            </Link>
            <div>Privacy Policy</div>
          </div>
          <div className="flex flex-col gap-3">
            <Link to="/aboutus">
              <div>About Us</div>
            </Link>
            <div>Social Media</div>
          </div>
          <div className="flex flex-col gap-2">
            <div>Company Address</div>
            <div className="text-[0.3rem] font-light sm:text-[0.4rem]">
              <div>PO BOX 417</div>
              <div>Des Plaines Ave, unit 491</div>
              <div>Forest Park, Illinois 60130</div>
            </div>
          </div>
        </div>
        <div className="absolute text-center text-[0.45rem] mt-5 text-white font-light sm:text-[0.6rem] sm:mt-6 md:text-[0.55rem] md:mt-5 ">
          Copyright © Legacy of Brothers Transportation
        </div>
      </div>
    </>
  );
};

export default Footer;
