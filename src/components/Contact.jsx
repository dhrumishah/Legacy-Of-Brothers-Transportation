import React from "react";
import Button from "./Button";
import SubjectOne from "./SubjectOne";

const Contact = () => {
  return (
    <div className="bg-[#F8F8F8]">
      <div className="flex justify-center align-middle">
        <div className="flex justify-between mt-24 gap-14">
          <div className="flex flex-col gap-10 w-[75%]">
            <h1 className="font-bold text-2xl">Contact Us</h1>
            <div>
              <label
                for="subject"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Subject*
              </label>
              <select
                id="subject"
                class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Subject*"
              >
                <option selected>-- Select an option --</option>
                <option value="FO">Future Operator</option>
                <option value="BOO">Becoming an Owner Operator</option>
                <option value="FC">Future Customer</option>
                <option value="FB">Feedback</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col w-[60%]">
            <h1 className="font-bold text-2xl">Mailing Address</h1>
            <div className="flex flex-col mt-5 text-sm gap-1 font-light">
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
      <div className="flex justify-center mt-12 lg:mr-[228px] md:mr-[228px] ">
        <SubjectOne />
      </div>
    </div>
  );
};

export default Contact;
