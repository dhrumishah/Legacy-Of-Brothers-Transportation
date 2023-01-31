import React from "react";
import Button from "./Button";

const SubjectThree = () => {
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
              type="tel"
              id="phone"
              class="bg-gray-50 border md:h-8 md:text-[0.7rem] md:py-0 md:px-3 xl:text-[0.5rem] xl:py-0 xl:px-1 xl:h-6 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Phone Number*"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
          </div>
          <div>
            <input
              type="text"
              id="type_freight_haul"
              class="bg-gray-50 border md:h-8 md:text-[0.7rem] md:py-0 md:px-3 xl:text-[0.5rem] xl:py-0 xl:px-1 xl:h-6 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Type of Freight Haul*"
              required
            />
          </div>
          <div>
            <input
              type="text"
              id="project_dates"
              class="bg-gray-50 border md:h-8 md:text-[0.7rem] md:py-0 md:px-3 xl:text-[0.5rem] xl:py-0 xl:px-1 xl:h-6 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Projected Dates*"
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
          <div>
            <input
              type="text"
              id="name_of_business*"
              class="bg-gray-50 border md:h-8 md:text-[0.7rem] md:py-0 md:px-3 xl:text-[0.5rem] xl:py-0 xl:px-1 xl:h-6 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Name of Business*"
              required
            />
          </div>
          <div>
            <input
              type="text"
              id="capacity_needed"
              class="bg-gray-50 border md:h-8 md:text-[0.7rem] md:py-0 md:px-3 xl:text-[0.5rem] xl:py-0 xl:px-1 xl:h-6 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Capacity Needed*"
              required
            />
          </div>
          <div>
            <input
              type="text"
              id="region"
              class="bg-gray-50 border md:h-8 md:text-[0.7rem] md:py-0 md:px-3 xl:text-[0.5rem] xl:py-0 xl:px-1 xl:h-6 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Region*"
              required
            />
          </div>
        </div>
      </div>
      <div className="w-full ">
        <textarea
          id="message3"
          rows="8"
          class="block p-2.5 h-24 w-full text-sm md:text-[0.7rem] xl:text-[0.5rem] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
          placeholder="Anything else we need to know*"
          required
        ></textarea>
      </div>
      <Button />
    </div>
  );
};

export default SubjectThree;
