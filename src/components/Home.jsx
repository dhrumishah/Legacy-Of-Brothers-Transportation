import React from "react";
import image_1 from "../assets/bg_1.png";

const Home = () => {
  return (
    <div>
      <div className="bg-black opacity-80">
        <img src={image_1} className="absolute top-0 left-0 h-screen" />
      </div>
      <div class="absolute text-center bg-transparent text-white items-center justify-center w-full mt-16">
        <h1 className="italic font-extrabold text-5xl sm:text-4xl">
          Building your legacy,
          <br /> one delivery at a time.
        </h1>
        <p className="italic font-extrabold text-2xl mt-4">
          Join Legacy of Brothers
        </p>
        <div className="flex flex-col items-center justify-center">
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
            JOIN US
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
