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
          className="absolute bg-no-repeat max-h-screen bg-cover bg-center z-[-1] w-[18%] border-none top-4 left-6 "
        />
        <div className="flex flex-row-reverse text-[0.45rem] pt-2 gap-1 mr-4 justify-items-end text-white sm:gap-2 md:gap-4 lg:gap-10 lg:px-[5rem] lg:text-base lg:pt-14 xl:gap-10 xl:px-[7rem] xl:text-lg xl:pt-16">
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
            <div className="text-[0.25rem] font-light">
              <div>PO BOX 417</div>
              <div>Des Plaines Ave, unit 491</div>
              <div>Forest Park, Illinois 60130</div>
            </div>
          </div>
        </div>
        <div className="text-center text-[0.45rem] mt-2 text-white font-light xl:mt-[5rem] xl:text-2xl">
          Copyright © Legacy of Brothers Transportation
        </div>
      </div>
    </>
  );
};

export default Footer;
