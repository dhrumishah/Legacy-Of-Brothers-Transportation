import React from "react";
import image_1 from "../assets/bg_1.png";
import image_2 from "../assets/bg_2.png";
import image_3 from "../assets/bg_3.png";
import rectangle from "../assets/homeRectangle.png";
import triangle from "../assets/homeTriangle.png";
import truck from "../assets/truck.png";

const Home = () => {
  return (
    <>
      <div className="">
        <img src={rectangle} className="absolute top-0 right-0 w-36 z-[10]" />
        <img
          src={triangle}
          className="absolute top-0 right-[8.9rem] w-8 z-[10]"
        />
        <h4 className="absolute top-3 right-7 text-lg text-[#F8DA78] z-[11] italic font-bold">
          DRIVERS
        </h4>
        <img src={truck} className="absolute top-3 right-[7rem] w-6 z-[11]" />
      </div>
      <div className="bg-black opacity-80">
        <img src={image_1} className="absolute top-0 left-0 w-full h-auto" />
      </div>
      <div className="absolute text-center bg-transparent text-white items-center justify-center w-full mt-2">
        <h1 className="italic font-bold text-lg leading-4">
          Building your legacy,
          <br /> one delivery at a time.
        </h1>
        <p className="italic font-bold text-sm mt-1">Join Legacy of Brothers</p>
        <div className="flex flex-col items-center justify-center">
          <button
            type="button"
            className="py-[1px] px-1 mt-2 text-[0.3rem] font-medium text-[#F8DA78] bg-[#717171] rounded-lg border-[1px] border-[#F8DA78]"
          >
            LEARN MORE
          </button>
          <button
            type="button"
            className="py-[1px] px-2 mt-1 text-[0.3rem] font-medium text-[#F8DA78] bg-[#717171] rounded-lg border-[1px] border-[#F8DA78]"
          >
            JOIN US
          </button>
        </div>
      </div>
      <div className="relative mt-[88.3vh]">
        <div className="relative">
          <img src={image_2} className=" top-0 h-screen" />
        </div>
        <div className="absolute text-center bg-[#e1e1e166] px-[5rem] text-black right-0 lg:top-[4rem] lg:mr-[10] lg:px-[3rem] rounded-lg xl:top-[6rem] xl:mr-[12rem] xl:px-[2rem] xl:py-[4rem]">
          <h1 className="italic font-extrabold text-4xl sm:text-3xl xl:text-4xl">
            Culture is the foundation <br /> of our success
          </h1>
          <p className="text-sm leading-4 mt-8 font-bold">
            Our drivers are the backbone of our company <br /> and we are
            committed to providing them with <br />
            the best working conditions possible!
          </p>
          <div className="flex flex-row gap-4 mt-8 mb-4 items-center justify-center">
            <button
              type="button"
              className="py-3 px-12 mt-8 text-sm font-medium text-[#F8DA78] bg-[#717171] rounded-lg border-[1.5px] border-[#F8DA78]"
            >
              LEARN MORE
            </button>
            <button
              type="button"
              className="py-3 px-9 mt-8 text-sm font-medium text-[#F8DA78] bg-[#717171] rounded-lg border-[1.5px] border-[#F8DA78]"
            >
              BECOME A DRIVER
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="">
          <h1 className="mt-8 text-black text-7xl justify-center text-center items-center font-extrabold italic">
            Services
          </h1>
          <div className="flex flex-row flex-wrap mt-12 justify-evenly gap-10">
            <a href="/aboutus" className="cursor-pointer">
              <div className="box w-[50vh] p-6 items-center text-center shadow-xl">
                <h1 className="text-4xl font-bold text-[#7B7B7B] mt-4 mb-4">
                  Reefer Freight
                </h1>
                <p className="mt-4 mb-4 text-lg leading-5 p-4">
                  Transporting temperature-sensitive goods
                </p>
              </div>
            </a>
            <a href="/aboutus" className="cursor-pointer">
              <div className="box w-[50vh] p-6  items-center text-center shadow-xl">
                <h1 className="text-4xl font-bold text-[#7B7B7B] mt-4 mb-4">
                  Dry Van
                </h1>
                <p className="mt-4 mb-4 text-lg leading-5 p-4">
                  Transporting non-temperature sensitive goods
                </p>
              </div>
            </a>
            <a href="/aboutus" className="cursor-pointer">
              <div className="box w-[50vh] p-2 items-center text-center shadow-xl">
                <h1 className="text-4xl font-bold text-[#7B7B7B] mt-4 mb-4">
                  Expedited Freight
                </h1>
                <p className="mt-4 mb-4 text-lg leading-5 p-4">
                  Box truck deliver for super fast delivery
                </p>
              </div>
            </a>
            <a href="/aboutus" className="cursor-pointer">
              <div className="box w-[50vh] p-6 items-center text-center shadow-xl">
                <h1 className="text-4xl font-bold text-[#7B7B7B] mt-4 mb-4">
                  RV Hauling
                </h1>
                <p className="mt-4 mb-4 text-lg leading-5 p-4">
                  Transportation of RVs across States
                </p>
              </div>
            </a>
            <a href="/aboutus" className="cursor-pointer">
              <div className="box w-[50vh] p-2 items-center text-center shadow-xl opacity-95">
                <h1 className="text-4xl font-bold text-[#7B7B7B] mt-4 mb-4">
                  Pilot Car
                </h1>
                <p className="mt-4 mb-4 text-lg leading-5 p-4">
                  Provide a vehicle that leads and follows oversized or
                  over-dimensional loads during transport
                </p>
              </div>
            </a>
          </div>
        </div>
        <img src={image_3} className="mt-[2rem] w-full" />
      </div>
    </>
  );
};

export default Home;
