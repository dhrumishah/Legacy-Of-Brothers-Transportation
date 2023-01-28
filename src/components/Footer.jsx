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
          className="absolute bg-no-repeat max-h-screen bg-cover bg-center z-[-1] w-1/5 border-none left-3 top-3"
        />
        <div className="flex flex-row-reverse justify-items-end gap-[4.5rem] px-20 pt-14 text-white">
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
        <div className="text-center text-white font-light mt-9">
          Copyright © Legacy of Brothers Transportation
        </div>
      </div>
    </>
  );
};

export default Footer;
