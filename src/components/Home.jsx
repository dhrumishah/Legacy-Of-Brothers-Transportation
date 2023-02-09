import React from "react";
import image_1 from "../assets/bg_1.png";
import image_2 from "../assets/bg_2.png";
import image_3 from "../assets/bg_3.png";
import rectangle from "../assets/homeRectangle.png";
import triangle from "../assets/homeTriangle.png";
import truck from "../assets/truck.png";
import reefer from "../assets/reeferFreight.jpg";
import dryVan from "../assets/dryVan.jpg";
import expFre from "../assets/expFre.jpg";
import pilotCar from "../assets/pilotCar.jpg";
import rvHauling from "../assets/rvHauling.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="py-8 sm:hidden"></div>
      <div class="firstcontainer relative">
        <img src={image_1} alt="firstcontainer_truck" class="brightness-90" />
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
        <img src={image_2} alt="secondcontainer_person" class="brightness-90" />
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
              <h1 class="text-s font-bold text-[#7B7B7B] mt-2 mb-4">Dry Van</h1>
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
        <img src={image_3} alt="lastcontainer_manytrucks" className="w-full" />
      </div>
    </>
    //   <>
    //     <div className="hidden">
    //       <img src={rectangle} className="absolute top-0 right-0 w-36 z-[10]" />
    //       <img
    //         src={triangle}
    //         className="absolute top-0 right-[8.9rem] w-8 z-[10]"
    //       />
    //       <h4 className="absolute top-3 right-7 text-lg text-[#F8DA78] z-[11] italic font-bold">
    //         DRIVERS
    //       </h4>
    //       <img src={truck} className="absolute top-3 right-[7rem] w-6 z-[11]" />
    //     </div>
    //     <button
    //       data-collapse-toggle="navbar-hamburger"
    //       type="button"
    //       class="absolute top-0 right-0 z-[11] inline-flex items-center p-1 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    //       aria-controls="navbar-hamburger"
    //       aria-expanded="false"
    //     >
    //       <span class="sr-only">Open main menu</span>
    //       <svg
    //         class="w-6 h-6"
    //         aria-hidden="true"
    //         fill="currentColor"
    //         viewBox="0 0 20 20"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path
    //           fill-rule="evenodd"
    //           d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
    //           clip-rule="evenodd"
    //         ></path>
    //       </svg>
    //     </button>
    //     <div
    //       class="absolute right-0 top-4 hidden w-[13%] z-[11] text-[0.4rem] text-white"
    //       id="navbar-hamburger"
    //     >
    //       <ul class="flex flex-col mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
    //         <li>
    //           <a
    //             href="/aboutus"
    //             class="block py-2 pl-3 pr-4 text-white bg-blue-200 rounded dark:bg-blue-600"
    //             aria-current="page"
    //           >
    //             About Us
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="/culture"
    //             class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    //           >
    //             Culture
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="/shop"
    //             class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white"
    //           >
    //             Shop
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="/contact"
    //             class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    //           >
    //             Contact
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="bg-black opacity-80">
    //       <img src={image_1} className="absolute top-0 left-0 w-full h-auto" />
    //     </div>
    //     <div className="absolute text-center bg-transparent text-white items-center w-full mt-2">
    //       <h1 className="italic font-bold text-lg leading-4">
    //         Building your legacy,
    //         <br /> one delivery at a time.
    //       </h1>
    //       <p className="italic font-bold text-sm mt-1">Join Legacy of Brothers</p>
    //       <div className="flex flex-col items-center justify-center">
    //         <button
    //           type="button"
    //           className="py-[1px] px-3 mt-2 text-[0.5rem] font-medium text-[#F8DA78] bg-[#717171] rounded-lg border-[1px] border-[#F8DA78]"
    //         >
    //           LEARN MORE
    //         </button>
    //         <button
    //           type="button"
    //           className="py-[1px] px-5 mt-1 text-[0.5rem] font-medium text-[#F8DA78] bg-[#717171] rounded-lg border-[1px] border-[#F8DA78]"
    //         >
    //           JOIN US
    //         </button>
    //       </div>
    //     </div>
    //     <div className="relative mt-[14rem]">
    //       <div className="relative">
    //         <img src={image_2} className="w-full h-auto top-0" />
    //       </div>
    //       <div className="absolute top-6 right-8 p-2 text-center bg-[#e1e1e166]  text-black rounded-lg">
    //         <h1 className="italic font-extrabold text-[0.7rem] leading-3">
    //           Culture is the foundation <br /> of our success
    //         </h1>
    //         <p className="text-[0.4rem] leading-[0.5rem] mt-3 font-semibold">
    //           Our drivers are the backbone of our company <br /> and we are
    //           committed to providing them with <br />
    //           the best working conditions possible!
    //         </p>
    //         <div className="flex flex-row gap-4 mt-2 mb-2 items-center justify-center">
    //           <button
    //             type="button"
    //             className="py-1 px-1 mt-2 text-[0.6rem] font-medium text-[#F8DA78] bg-[#717171] rounded-lg border-[1px] border-[#F8DA78]"
    //           >
    //             LEARN MORE
    //           </button>
    //           <button
    //             type="button"
    //             className="py-1 px-2 mt-2 text-[0.6rem] font-medium text-[#F8DA78] bg-[#717171] rounded-lg border-[1px] border-[#F8DA78]"
    //           >
    //             BECOME A DRIVER
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //     <div>
    //       <div className="">
    //         <h1 className="mt-6 text-black text-4xl justify-center text-center items-center font-extrabold italic">
    //           Services
    //         </h1>
    //         <div className="flex flex-row flex-wrap mt-9 justify-evenly gap-10">
    //           <a href="/aboutus" className="cursor-pointer">
    //             <div className="box w-2/3 m-auto p-4 items-center text-center shadow-xl">
    //               <h1 className="text-xl font-bold text-[#7B7B7B] mt-2 mb-4">
    //                 Reefer Freight
    //               </h1>
    //               <p className="mt-4 mb-4 text-sm leading-5 p-2">
    //                 Transporting temperature-sensitive goods
    //               </p>
    //             </div>
    //           </a>
    //           <a href="/aboutus" className="cursor-pointer">
    //             <div className="box w-2/3 m-auto p-4 items-center text-center shadow-xl">
    //               <h1 className="text-2xl font-bold text-[#7B7B7B] mt-4 mb-4">
    //                 Dry Van
    //               </h1>
    //               <p className="mt-4 mb-4 text-sm leading-5 p-2">
    //                 Transporting non-temperature sensitive goods
    //               </p>
    //             </div>
    //           </a>
    //           <a href="/aboutus" className="cursor-pointer">
    //             <div className="box w-[73%] m-auto p-6 items-center text-center shadow-xl">
    //               <h1 className="text-2xl font-bold text-[#7B7B7B] mt-4 mb-4">
    //                 Expedited Freight
    //               </h1>
    //               <p className="mt-4 mb-4 text-sm leading-5 p-2">
    //                 Box truck deliver for super fast delivery
    //               </p>
    //             </div>
    //           </a>
    //           <a href="/aboutus" className="cursor-pointer">
    //             <div className="box w-[78%] m-auto p-6 items-center text-center shadow-xl">
    //               <h1 className="text-2xl font-bold text-[#7B7B7B] mt-4 mb-4">
    //                 RV Hauling
    //               </h1>
    //               <p className="mt-4 mb-4 text-sm leading-5 p-2">
    //                 Transportation of RVs across States
    //               </p>
    //             </div>
    //           </a>
    //           <a href="/aboutus" className="cursor-pointer">
    //             <div className="box w-[57%] m-auto p-6 items-center text-center shadow-xl">
    //               <h1 className="text-2xl font-bold text-[#7B7B7B] mt-4 mb-4">
    //                 Pilot Car
    //               </h1>
    //               <p className="mt-4 mb-4 text-sm leading-5 p-2">
    //                 Provide a vehicle that leads and follows oversized or
    //                 over-dimensional loads during transport
    //               </p>
    //             </div>
    //           </a>
    //         </div>
    //       </div>
    //       <img src={image_3} className="mt-[2rem] w-full" />
    //     </div>
    //   </>
  );
};

export default Home;
