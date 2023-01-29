import React from "react";
import image_1 from "../assets/bg_1.png";
import image_2 from "../assets/bg_2.png";
import image_3 from "../assets/bg_3.png";

const Home = () => {
  return (
    <>
      <div className="bg-black opacity-80">
        <img src={image_1} className="absolute top-0 left-0 h-screen" />
      </div>
      <div className="absolute text-center bg-transparent text-white items-center justify-center w-full mt-24">
        <h1 className="italic font-extrabold text-7xl ">
          Building your legacy,
          <br /> one delivery at a time.
        </h1>
        <p className="italic font-extrabold text-4xl mt-4">
          Join Legacy of Brothers
        </p>
        <div className="flex flex-col items-center justify-center">
          <button
            type="button"
            className="py-3 px-12 mt-8 text-sm font-medium text-[#F8DA78] bg-[#717171] rounded-lg border-[1.5px] border-[#F8DA78]"
          >
            LEARN MORE
          </button>
          <button
            type="button"
            className="py-3 px-16 mt-4 text-sm font-medium text-[#F8DA78] bg-[#717171] rounded-lg border-[1.5px] border-[#F8DA78]"
          >
            JOIN US
          </button>
        </div>
      </div>
      <div className="mt-[88.3vh]">
        <div className="relative">
          <img src={image_2} className=" top-0 h-screen" />
        </div>
        <div className="absolute text-center bg-[#e1e1e166] p-[5rem] text-black right-0 top-[45rem] mr-28 rounded-lg ">
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
              className="py-1.5 px-4  mt-4 text-sm font-medium text-[#F8DA78] bg-[#717171] rounded-lg border-[1.5px] border-[#F8DA78]"
            >
              LEARN MORE
            </button>
            <button
              type="button"
              className="py-1.5 px-4  mt-4 text-sm font-medium text-[#F8DA78] bg-[#717171] rounded-lg border-[1.5px] border-[#F8DA78]"
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
        <img src={image_3} className="mt-[2rem]" />
      </div>
    </>
  );
};

export default Home;
