import React from "react";
import image_5 from "../assets/culture_1.png";

const Culture = () => {
  return (
    <>
      <div className="relative">
        <img
          src={image_5}
          className="bg-no-repeat max-h-screen bg-cover bg-center w-full"
        />
        <div className="absolute top-[30%] left-[28%] translate-x-[-50%] translate-y-[-50%] w-1/2">
          <h1 className="font-bold text-2xl px-2 text-[#606060]">
            Legacy of Brothers
          </h1>
          <p className="text-[0.7rem] leading-4 py-2 px-2 font-medium">
            At Legacy of Brothers, we understand that our company culture is
            just as important as the services we provide. We are a family-owned
            and operated trucking company, and we strive to treat each of our
            employees like family. We believe that by valuing and investing in
            our team, we can create a legacy of excellence that extends beyond
            just transportation.
          </p>
        </div>
      </div>
    </>
  );
};

export default Culture;
