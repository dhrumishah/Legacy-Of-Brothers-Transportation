import React from "react";
import image_2 from "../assets/bg_2.png";

const Culture = () => {
  return (
    <div className="relative mt-[625px]">
      <img src={image_2} className="absolute top-0 h-screen" />
      <div class="absolute text-center bg-[#e1e1e166] p-6 text-black right-0 mt-20 mr-28 rounded-lg">
        <h1 className="italic font-extrabold text-4xl sm:text-3xl">
          Culture is the foundation <br /> of our success
        </h1>
        <p className="text-sm leading-4 mt-8 font-bold">
          Our drivers are the backbone of our company <br /> and we are
          committed to providing them with <br />
          the best working conditions possible!
        </p>
        <div className="flex flex-row gap-2 mt-4 mb-4 items-center justify-center">
          <button
            type="button"
            className="py-1.5 px-4  mt-4 text-sm font-medium text-[#F8DA78] bg-[#717171] rounded-lg border-2 border-[#F8DA78]"
          >
            LEARN MORE
          </button>
          <button
            type="button"
            className="py-1.5 px-4  mt-4 text-sm font-medium text-[#F8DA78] bg-[#717171] rounded-lg border-2 border-[#F8DA78]"
          >
            BECOME A DRIVER
          </button>
        </div>
      </div>
    </div>
  );
};

export default Culture;
