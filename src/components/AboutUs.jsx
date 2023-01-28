import React from "react";
import image_1 from "../assets/about_1.png";
import comma from "../assets/comma.png";
import image_21 from "../assets/image_21.png";
import image_22 from "../assets/image_22.png";
import image_23 from "../assets/image_23.png";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      <div className="">
        <img
          src={image_1}
          className="absolute bg-no-repeat max-h-screen bg-cover bg-center w-full z-[-1] top-0"
        />
      </div>
      <div className="mt-[86.5vh] bg-[#F8F8F8]">
        <div className="p-8 bg-[#686868] text-4xl font-bold text-[#F8DA78] ">
          Our Services
        </div>
        <div className="flex flex-col gap-2 py-12 mt-4 w-1/2 m-auto">
          <p>
            "Our company specializes in providing both reefer and dry van
            transportation services.
          </p>
          <p>
            Our reefer services involve transporting temperature-sensitive
            goods, such as fresh produce and pharmaceuticals, in refrigerated
            trailers. These trailers are equipped with temperature control
            systems to ensure that your goods are delivered in the same
            condition as when they were picked up.
          </p>
          <p>
            Our dry van services involve transporting non-temperature sensitive
            goods, such as clothing and furniture, in standard trailers. These
            trailers are designed to protect your goods from the elements and
            ensure that they are delivered in the same condition as when they
            were picked up.
          </p>
          <p>
            Our expedited box delivery service is designed for customers who
            need their cargo delivered as quickly as possible. With our advanced
            logistics and experienced team of drivers, we are able to transport
            your boxes to their destination in the shortest time possible.
            Whether it's for time-sensitive freight or high-value goods, our
            expedited box delivery service is the ideal choice for customers who
            demand speed and reliability.
          </p>
          <p>
            "We pride ourselves on providing reliable and efficient service, and
            our team of experienced drivers and logistics professionals are
            dedicated to ensuring that your goods are delivered on time and in
            perfect condition."
          </p>
        </div>
        <div className="text-center text-[#737373] text-4xl font-bold p-9">
          Join the Brotherhood
        </div>
        <div className="flex justify-evenly gap-10 m w-2/3 align-middle m-auto py-10 mb-16">
          <Link to="/contact">
            <div className="">
              <img src={image_21} className="max-w-full " />
              <div className="text-center font-bold text-lg bg-[#757575] text-white rounded-sm p-1 -my-1">
                Future Customer
              </div>
            </div>
          </Link>
          <Link to="/contact">
            <div className="">
              <img src={image_22} className="max-w-full" />
              <div className="text-center font-bold text-lg bg-[#757575] text-white rounded-sm p-1 -my-1">
                Future Operator
              </div>
            </div>
          </Link>
          <Link to="/contact">
            <div>
              <img src={image_23} className="w-full" />
              <div className="text-center font-bold text-lg bg-[#757575] text-white rounded-sm p-1 -my-1">
                Future Owner Operator
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AboutUs;

{
  /* <div className="flex flex-col">
      <div className="">
        <img src={image_1} className="absolute top-0 left-0 h-screen " />
        <div className="relative w-[54.5%] left-40 top-40 ">
          <img src={comma} className="absolute -top-6 -left-6 w-[6%] " />
          <div className="font-[750] text-xl text-center leading-5 w-[95%]">
            Here at Legacy of Brothers Transportation our mission is not to just
            provide timely & safe delivery but superior customer service.
          </div>
          <div className="absolute left-5 font-semibold text-sm text-center mt-5 w-[85%] leading-4">
            With dedicated drivers fostering amazing teamwork; constantly
            challenging ourselves to build new standards of quality and
            performance through leadership, respect, transparency and
            commitment. We focus on personal achievement with "I Can" and
            teamwork with "We Can", but creating a legacy together is the
            ultimate goal.
          </div>
          <img src={comma} className="absolute top-5 right-9 w-[6%] " />
        </div>
        <div className="relative top">Our Services</div>

      </div>
    </div> */
}
