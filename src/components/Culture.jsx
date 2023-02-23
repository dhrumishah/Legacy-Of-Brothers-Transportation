import React from "react";
import { Link } from "react-router-dom";
import image_5 from "../assets/culture_1.png";
import image_6 from "../assets/culture_2.png";
import fb from "../assets/facebook.png";
import insta from "../assets/instagram.png";

const Culture = () => {
  return (
    <>
      <div className="py-8 sm:hidden"></div>
      <div className="relative">
        <img
          src={image_5}
          className="bg-no-repeat max-h-screen bg-cover bg-center w-full"
        />
        <div className="absolute top-[30%] left-[28%] translate-x-[-50%] translate-y-[-50%] w-1/2 md:w-[40%] md:left-[25%]">
          <h1 className="font-bold text-2xl px-2 text-[#606060] md:text-xl ">
            Legacy of Brothers
          </h1>
          <p className="text-[0.7rem] leading-4 py-2 px-2 font-medium md:text-[0.45rem] ">
            At Legacy of Brothers, we understand that our company culture is
            just as important as the services we provide. We are a family-owned
            and operated trucking company, and we strive to treat each of our
            employees like family. We believe that by valuing and investing in
            our team, we can create a legacy of excellence that extends beyond
            just transportation.
          </p>
        </div>
      </div>
      <div className="relative bg-[#EDE9C9]">
        <div className="absolute w-10 gap-1 right-3 top-1 flex">
          <Link
            to="https://www.facebook.com/LOBTRANS?mibextid=LQQJ4d"
            target="_blank"
          >
            <img className="" src={fb} />
          </Link>
          <Link to="https://www.instagram.com/lobtrans/" target="_blank">
            <img className="" src={insta} />
          </Link>
        </div>
        <div className="text-center p-10 px-18">
          <h4 className="text-[0.79rem] font-extrabold leading-3">
            At Legacy of Brothers, we are building something special, and we
            invite you to
          </h4>
          <h4 className="text-[0.79rem] font-extrabold">
            join us on our journey to create a legacy that will last for
            generations to come.
          </h4>
          <p className="text-[0.7rem] mt-4 leading-3 font-medium px-6">
            Our drivers are the backbone of our company, and we are committed to
            providing them with the best working conditions possible. We
            prioritize safety, communication and fair pay. We also believe in
            work-life balance, which is why we offer flexible scheduling and
            time off options.
          </p>
        </div>

        {/* <iframe
          width="200rem"
          height="200rem"
          className="mx-auto  rounded-lg "
          src="https://www.instagram.com/lobtrans/embed"
          frameborder="0"
        ></iframe> */}
        <div className="px-16">
          <img src={image_6} />
        </div>
      </div>
    </>
  );
};

export default Culture;
