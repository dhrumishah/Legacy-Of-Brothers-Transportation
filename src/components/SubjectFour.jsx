import React from "react";
import Button from "./Button";

const SubjectFour = () => {
  return (
    <div className="flex flex-col gap-10 xl:gap-5 lg:gap-6">
      <div className="flex w-full gap-10 sm:gap-16 md:gap-10 flex-col md:flex-row xl:flex-row xl:gap-5 lg:gap-5">
        <div className="flex flex-col gap-10 xl:gap-5 lg:gap-6">
          <div>
            <input
              type="text"
              id="your_name"
              class="bg-gray-50 border md:h-8 md:text-[0.7rem] md:py-0 md:px-3 xl:text-[0.5rem] xl:py-0 xl:px-1 xl:h-6 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Your Name*"
              required
            />
          </div>
          <div>
            <input
              type="text"
              id="subject"
              class="bg-gray-50 border md:h-8 md:text-[0.7rem] md:py-0 md:px-3 xl:text-[0.5rem] xl:py-0 xl:px-1 xl:h-6 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Subject*"
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-10 xl:gap-5 lg:gap-6">
          <div>
            <input
              type="email"
              id="email"
              class="bg-gray-50 border md:h-8 md:text-[0.7rem] md:py-0 md:px-3 xl:text-[0.5rem] xl:py-0 xl:px-1 xl:h-6 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Your Email*"
              required
            />
          </div>
        </div>
      </div>
      <div className="w-full ">
        <textarea
          id="feedback"
          rows="8"
          class="block p-2.5 w-full text-sm md:text-[0.7rem] xl:text-[0.5rem] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
          placeholder="Write your Feedback*"
          required
        ></textarea>
      </div>
      <Button />
    </div>
  );
};

export default SubjectFour;
