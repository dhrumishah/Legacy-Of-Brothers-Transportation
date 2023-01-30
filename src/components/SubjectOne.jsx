import React from "react";
import Button from "./Button";

const SubjectOne = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex w-full gap-10 sm:gap-16 md:gap-14 md:ml-20">
        <div className="flex flex-col gap-10">
          <div>
            <input
              type="text"
              id="your_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Your Name*"
              required
            />
          </div>
          <div>
            <input
              type="tel"
              id="phone"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Phone Number*"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
          </div>
          <div>
            <select
              id="preferable_freight*"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Preferable Freight*"
            >
              <option selected>Preferable Freight*</option>
              <option value="reefer">Reefer</option>
              <option value="dry_van">Dry Van</option>
              <option value="eb_truck">Expedited Box Truck </option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div>
            <input
              type="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Your Email*"
              required
            />
          </div>
          <div>
            <select
              id="experience"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            >
              <option selected>Years of Experience*</option>
              <option value="one">1</option>
              <option value="two">2-4</option>
              <option value="three">5-7</option>
              <option value="four">8+</option>
            </select>
          </div>
        </div>
      </div>
      <div className="w-full">
        <textarea
          id="message"
          rows="8"
          class="block p-2.5 w-full text-sm md:ml-20 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
          placeholder="Write your Experience*"
          required
        ></textarea>
      </div>
      <Button />
    </div>
  );
};

export default SubjectOne;
