import React, { useEffect, useState } from "react";
import Button from "./Button";
import SubjectFour from "./SubjectFour";
import SubjectOne from "./SubjectOne";
import SubjectThree from "./SubjectThree";
import SubjectTwo from "./SubjectTwo";

const FutureOperator = () => {
  const [contactOption, setContactOption] = useState("FO");

  return (
    <div className="bg-[#F8F8F8]">
      <div className="py-8 sm:hidden"></div>
      <div className="flex justify-center align-middle">
        <div className="flex justify-between mt-24 gap-14 xl:w-[60%] xl:mt-14">
          <div className="flex flex-col gap-10 w-[75%] md:w-full xl:w-[50%]">
            <h1 className="font-bold text-2xl sm:text-xl md:text-base xl:text-xl ">
              Contact Us
            </h1>
            <div className="w-[70%] md:w-[50%]">
              <label
                for="subject"
                class="block mb-2 text-sm md:text-xs xl:text-[0.7rem] font-medium text-gray-900 "
              >
                Subject*
              </label>
              <select
                id="subject"
                class="bg-white border md:h-8 md:text-[0.7rem] md:py-0 md:px-3 xl:text-[0.5rem] xl:py-0 xl:px-1 xl:h-6   border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Subject*"
                // value={contactOption}
                onChange={(e) => setContactOption(e.target.value)}
              >
                <option>-- Select an option --</option>
                <option selected value="FO">
                  Future Operator
                </option>
                <option value="BOO">Becoming an Owner Operator</option>
                <option value="FC">Future Customer</option>
                <option value="FB">Feedback</option>
              </select>
            </div>
            <div className="mt-16 w-60 md:flex md:w-80 md:mt-0 xl:mt-0">
              {contactOption === "FO" && <SubjectOne />}
              {contactOption === "BOO" && <SubjectTwo />}
              {contactOption === "FC" && <SubjectThree />}
              {contactOption === "FB" && <SubjectFour />}
            </div>
          </div>
          <div className="flex flex-col w-[60%] md:w-[70%] ">
            <h1 className="font-bold text-2xl sm:text-xl md:text-base xl:text-base">
              Mailing Address
            </h1>
            <div className="flex flex-col mt-5 text-[0.6rem]  gap-0 font-light md:text-[0.5rem] md:leading-[0.7rem] xl:text-[0.5rem] xl:gap-0 xl:leading-[0.6rem]">
              <span>Legacy of Brothers Transportation</span>
              <span>LLC</span>
              <span>PO BOX 417</span>
              <span>Des Plaines Ave, unit 491 </span>
              <span>Forest Park, Illinois 60130</span>
              <span>U.S</span>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex ml-20 mt-12 mr lg:mr-[228px] md:mr-[228px]">
        <SubjectOne />
      </div> */}
    </div>
  );
};

export default FutureOperator;
