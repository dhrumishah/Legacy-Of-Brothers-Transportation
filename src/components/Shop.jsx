import React, { useState } from "react";
import red from "../assets/redT.png";
import white from "../assets/whiteT.png";
import yellow from "../assets/yellowT.png";
import black from "../assets/blackT.png";
import yellowHat from "../assets/yellowHat.png";
import brownHat from "../assets/brownHat.png";
import cap from "../assets/caps.png";

import SoldOutButton from "./SoldOutButton";

const Shop = () => {
  const [color, setColor] = useState("red");
  const [hat, setHat] = useState("brownHat");

  const redT = <img src={red} alt="" />;
  const whiteT = <img src={white} alt="" />;
  const yellowT = <img src={yellow} alt="" />;
  const blackT = <img src={black} alt="" />;
  const brownH = <img src={brownHat} alt="" />;
  const yellowH = <img src={yellowHat} />;

  return (
    <>
      <div className="py-8 sm:hidden"></div>
      <div className="bg-[#F8F8F8]">
        <h1 className="text-center pt-14 text-4xl font-bold sm:text-2xl md:text-xl xl:text-xl">
          Online Store
        </h1>
        <div className="flex flex-col  pt-10 pb-10 text-3xl gap-10 text-center sm:flex-row sm:text-xs sm:pb-72 sm:justify-center sm:gap-1 md:text-[0.6rem] lg:text-[0.75rem] xl:text-[0.65rem]">
          <div className="w-1/2 sm:w-[15%] mx-auto">
            {color === "red" && redT}
            {color === "white" && whiteT}
            {color === "yellow" && yellowT}
            {color === "black" && blackT}
            <div className="flex justify-center gap-5 sm:gap-2 py-2">
              <span
                onClick={() => setColor("yellow")}
                class="w-7 h-7 sm:w-3 sm:h-3 bg-yellow-300 rounded-full cursor-pointer"
              ></span>
              <span
                onClick={() => setColor("white")}
                class="w-7 h-7 sm:w-3 sm:h-3 bg-white rounded-full cursor-pointer"
              ></span>
              <span
                onClick={() => setColor("black")}
                class="w-7 h-7 sm:w-3 sm:h-3 bg-black rounded-full cursor-pointer"
              ></span>
              <span
                onClick={() => setColor("red")}
                class="w-7 h-7 sm:w-3 sm:h-3 bg-red-500 rounded-full cursor-pointer"
              ></span>
            </div>
            <div className="py-1 sm:-my-2">
              <span>LOBT Shirt</span>
            </div>
            <div className="mx-auto w-1/2 sm:mt-4 sm:w-24">
              <SoldOutButton />
            </div>
          </div>
          <div className="w-1/2 sm:w-[15%] mx-auto sm:-mx-10 md:-mx-12 xl:-mx-20">
            <img src={cap} />
            <div className="py-6">
              <span>LOBT Trucker Cap</span>
            </div>
            <div className="mx-auto w-1/2 sm:-mt-2 sm:w-24">
              <SoldOutButton />
            </div>
          </div>
          <div className="w-1/2 sm:w-[15%] mx-auto">
            {hat === "brownHat" && brownH}
            {hat === "yellowHat" && yellowH}

            <div className="flex justify-center gap-5 sm:gap-2 py-2">
              <span
                onClick={() => setHat("brownHat")}
                class="w-7 h-7 sm:w-3 sm:h-3 bg-[#CCBA9F] rounded-full cursor-pointer"
              ></span>
              <span
                onClick={() => setHat("yellowHat")}
                class="w-7 h-7 sm:w-3 sm:h-3 bg-yellow-300 rounded-full cursor-pointer"
              ></span>
            </div>
            <div className="py-1 sm:-my-2">
              <span>LOBT Beanie Hat</span>
            </div>
            <div className="mx-auto w-1/2 sm:mt-4 sm:w-24">
              <SoldOutButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
