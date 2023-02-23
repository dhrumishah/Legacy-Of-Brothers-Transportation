import React, { useEffect, useState } from "react";
import image_1 from "../assets/bg_1.png";
import image_2 from "../assets/bg_2.png";
import image_3 from "../assets/bg_3.png";
import rectangle from "../assets/homeRectangle.png";
import triangle from "../assets/homeTriangle.png";
import truck from "../assets/truck.png";
import reefer from "../assets/reeferFreight.png";
import dryVan from "../assets/dryVan.png";
import expFre from "../assets/expFre.png";
import pilotCar from "../assets/pilotCar.png";
import rvHauling from "../assets/rvHauling.png";
import { Link } from "react-router-dom";
import "./App.css";
import preloader from "../assets/preloader.gif";

const Home = () => {
  // };
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading && (
        <div className="preloader-overlay">
          <img className="preloader-video" src={preloader} />
        </div>
      )}
      {!loading && (
        <>
          <div className="py-8 sm:hidden"></div>
          <div class="firstcontainer relative">
            <img
              src={image_1}
              alt="firstcontainer_truck"
              class="brightness-90"
            />
            <div class="imagetextcontainer flex flex-col items-center justify-center w-full absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
              <h1 class="text-3xl md:text-[4xl] xl:text-[7xl] mt-5 text-white font-extrabold italic">
                Building your legacy,
              </h1>
              <h1 class="text-3xl md:text-[4xl] xl:text-[7xl] text-white font-extrabold italic">
                one delivery at a time.
              </h1>
              <h2 class="text-xl md:text-[2.5xl] xl:text-[2xl] mb-1 mt-2 text-white font-extrabold italic">
                Join Legacy of Brothers
              </h2>
              <Link to="/aboutus">
                <button class="bg-[#717171] hover:bg-gray-600 text-[#F8DA78] font-bold rounded-lg border-[1px] border-[#F8DA78] text-[.5rem] xl:text-[.4rem] px-4 py-1 mb-1 mt-3 min-w-[4rem]">
                  LEARN MORE
                </button>
              </Link>
              <Link to="/contact">
                <button class="bg-[#717171] hover:bg-gray-600 text-[#F8DA78] font-bold rounded-lg border-[1px] border-[#F8DA78] text-[.5rem] xl:text-[.4rem] px-6 py-1 mb-2 min-w-[4rem]">
                  JOIN US
                </button>
              </Link>
            </div>
          </div>
          <div class="secondcontainer relative">
            <img
              src={image_2}
              alt="secondcontainer_person"
              class="brightness-90"
            />
            <div class="absolute top-[16%] right-[15%] h-48 md:h-52 xl:h-52 text-center bg-[#e1e1e166] text-black rounded-md  flex flex-col justify-evenly px-7 py-3">
              <h1 class="italic font-extrabold text-[0.95rem] leading-3">
                Culture is the foundation <br />
                of our success
              </h1>
              <p class="text-[0.55rem] leading-[0.6rem] font-semibold">
                Our drivers are the backbone of our company <br />
                and we are committed to providing them with <br />
                the best working conditions possible!
              </p>
              <div class="flex flex-row gap-4 items-center justify-center">
                <Link to="/culture">
                  <button
                    type="button"
                    class="bg-[#717171] hover:bg-gray-600 text-[#F8DA78] font-bold rounded-lg border-[1px] border-[#F8DA78] text-[.5rem]  px-4 py-1 xl:text-[.45rem]"
                  >
                    LEARN MORE
                  </button>
                </Link>
                <Link to="/contact">
                  <button
                    type="button"
                    class="bg-[#717171] hover:bg-gray-600 text-[#F8DA78] font-bold rounded-lg border-[1px] border-[#F8DA78] text-[.5rem] px-3 py-1 xl:text-[.45rem]"
                  >
                    BECOME A DRIVER
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div class="thirdcontainer services flex flex-col items-center pt-6 pb-6">
            <h1 class="text-center font-extrabold text-4xl mb-4">Services</h1>
            <div class="services-type flex justify-center items-center mx-6 gap-8 md:flex-row md:gap-6 flex-wrap">
              <Link to="/futureCustomer">
                <div class="box w-[13rem] mt-3 p-2 text-center shadow-md md:shadow-xl">
                  <h1 class="text-s font-bold text-[#7B7B7B] mt-2 mb-4">
                    Reefer Freight
                  </h1>
                  <p class="mt-4 mb-4 text-[.6rem] leading-3 p-2">
                    Transporting temperature-sensitive goods
                  </p>
                  <img className="w-20 mx-auto" src={reefer} />
                </div>
              </Link>
              <Link to="/futureCustomer">
                <div class="box w-[13rem] p-2 text-center shadow-md md:shadow-xl">
                  <h1 class="text-s font-bold text-[#7B7B7B] mt-2 mb-4">
                    Dry Van
                  </h1>
                  <p class="mt-4 mb-4 text-[.6rem] leading-3 p-3">
                    Transporting non-temperature sensitive goods
                  </p>
                  <img className="w-20 mx-auto" src={dryVan} />
                </div>
              </Link>
              <Link to="/futureCustomer">
                <div class="box w-[13rem] p-2 text-center shadow-md md:shadow-xl">
                  <h1 class="text-s font-bold text-[#7B7B7B] mt-2 mb-4">
                    Expedited Freight
                  </h1>
                  <p class="mt-4 mb-4 text-[.6rem] leading-3 p-2">
                    Box truck deliver for super fast delivery
                  </p>
                  <img className="w-20 mx-auto" src={expFre} />
                </div>
              </Link>
              <Link to="/futureCustomer">
                <div class="box w-[13rem] sm:w-[13rem] p-5 text-center shadow-md md:shadow-xl">
                  <h1 class="text-s font-bold text-[#7B7B7B] -mt-1 mb-4">
                    RV Hauling
                  </h1>
                  <p class="mt-5 mb-4 text-[.6rem] leading-3 p-2">
                    Transportation of RVs across States
                  </p>
                  <img className="w-20 mx-auto" src={rvHauling} />
                </div>
              </Link>
              <Link to="/futureCustomer">
                <div class="box w-[13rem] sm:w-[13rem] p-1  text-center shadow-md md:shadow-xl">
                  <h1 class="text-s font-bold text-[#7B7B7B] mt-2 mb-4">
                    Pilot Car
                  </h1>
                  <p class="mt-4 mb-4 text-[.6rem] leading-3 pt-1">
                    Provide a vehicle that leads and follows oversized or
                    over-dimensional loads during transport
                  </p>
                  <img className="w-24 mx-auto" src={pilotCar} />
                </div>
              </Link>
            </div>
          </div>
          <div class="fourthcontainer">
            <img
              src={image_3}
              alt="lastcontainer_manytrucks"
              className="w-full"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
