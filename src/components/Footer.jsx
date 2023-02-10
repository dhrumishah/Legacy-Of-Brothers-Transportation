import React from "react";
import image_3 from "../assets/footer.png";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="relative flex flex-col">
        <img
          src={image_3}
          className="bg-no-repeat max-h-screen bg-cover bg-center z-[-1]"
        />
        {/* <img
          src={logo}
          className="absolute bg-no-repeat max-h-screen bg-cover bg-center  w-[18%] border-none top-4 left-7 sm:left-12 md:left-12 lg:left-16"
        /> */}
        <div className="absolute w-full top-0 right-0 flex flex-col gap-3 mr-9 sm:gap-0">
          <div className="  flex flex-row-reverse text-[0.65rem] pt-6 gap-5  justify-center text-white sm:gap-3 sm:text-[0.7rem] md:gap-4 md:text-[0.65rem] lg:gap-4 lg:text-[0.75rem] xl:text-[0.6rem]">
            <Link to="/shop">
              <div>Online Store</div>
            </Link>
            <Link to="/culture">
              <div>Culture</div>
            </Link>
            <div className="flex flex-col gap-3">
              <Link to="/contact">
                <div>Apply Here</div>
              </Link>
              {/* <div>Terms of Use</div> */}
            </div>
            <div className="flex flex-col gap-3">
              <Link to="/contact">
                <div>Contact Us</div>
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <Link to="/aboutus">
                <div>About Us</div>
              </Link>
              <Link to="https://www.instagram.com/lobtrans/" target="_blank">
                <div>Social Media</div>
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <div>Company Address</div>
              <div className="text-[0.3rem] font-light sm:text-[0.45rem] lg:text-[0.5rem] xl:text-[0.4rem]">
                <div>PO BOX 417</div>
                <div>Des Plaines Ave, unit 491</div>
                <div>Forest Park, Illinois 60130</div>
              </div>
            </div>
            <img
              src={logo}
              className="bg-no-repeat max-h-screen bg-cover bg-center ml-3 w-[15%] sm:w-[20%] border-none"
            />
          </div>
          <div className=" text-center text-[0.6rem] ml-16  text-white font-light sm:text-[0.6rem]  md:text-[0.65rem] md:font-[100] xl:text-[0.5rem] xl:font-[50] ">
            Copyright © Legacy of Brothers Transportation
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
