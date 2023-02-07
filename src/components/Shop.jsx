import React, { useState } from "react";
import red from "../assets/redT.png";
import white from "../assets/whiteT.png";
import yellow from "../assets/yellowT.png";
import black from "../assets/blackT.png";
import cap from "../assets/caps.png";
import hat from "../assets/hats.png";

const Shop = () => {
  const [color, setColor] = useState("red");

  const redT = <img src={red} alt="" />;
  const whiteT = <img src={white} alt="" />;
  const yellowT = <img src={yellow} alt="" />;
  const blackT = <img src={black} alt="" />;

  return (
    <>
      <div className="bg-[#F8F8F8]">
        <h1 className="text-center pt-14 text-4xl font-bold sm:text-3xl md:text-2xl xl:text-2xl">
          Online Store
        </h1>
        <div className="flex flex-col mx-auto pt-10 pb-10 text-3xl gap-10 text-center sm:flex-row sm:pb-72 sm:justify-center sm:gap-1 md:text-[0.8rem] lg:text-[0.9rem] xl:text-[0.8rem]">
          <div className="w-1/2 sm:w-1/5 mx-auto">
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
          </div>
          <div className="w-1/2 sm:w-1/5 mx-auto">
            <img src={cap} />
            <div className="py-6">
              <span>LOBT Trucker Cap</span>
            </div>
          </div>
          <div className="w-1/2 sm:w-1/5 mx-auto">
            <img src={hat} />
            <div className="py-6">
              <span>LOBT Beanie Hat</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
