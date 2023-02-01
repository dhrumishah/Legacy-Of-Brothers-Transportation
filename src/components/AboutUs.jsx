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
      <div className="relative bg-[#F8F8F8">
        <img
          src={image_1}
          className="bg-no-repeat max-h-screen bg-cover bg-center w-full z-[-1]"
        />
        <div className="absolute top-[35%] left-[10%] mx-auto w-[60%] xl:w-[62%] ">
          <div className="w-[100%] mx-auto">
            <div className="flex justify-around">
              <img
                src={comma}
                className="absolute w-8 top-0 left-0 translate-x-[-50%] translate-y-[-50%] sm:translate-x-[-30%] md:translate-x-[-70%] sm:translate-y-[-50%] xl:translate-x-[-40%]"
              />
              <div className="w-[95%]">
                <h4 className="text-[0.6rem] text-center   font-extrabold leading-3 lg:text-[0.7rem] xl:text-[0.65rem]">
                  Here at Legacy of Brothers Transportation our mission is not
                  to
                </h4>
                <h4 className="text-[0.6rem] text-center  font-extrabold lg:text-[0.7rem] xl:text-[0.63rem]">
                  just provide timely & safe delivery but superior customer
                  service.
                </h4>
              </div>
              <img
                src={comma}
                className="absolute w-8 bottom-[45%] -right-[9%] translate-x-[-35%] translate-y-[-50%] sm:translate-x-[-30%] md:translate-x-[-30%] sm:translate-y-[-50%] xl:translate-x-[-50%]"
              />
            </div>
            <p className="text-[0.5rem] mt-4 text-center leading-3 font-medium px-3">
              With dedicated drivers fostering amazing teamwork; constantly
              challenging ourselves to build new standards of quality and
              performance through leadership, respect, transparency and
              commitment. We focus on personal achievement with "I Can" and
              teamwork with "We Can", but creating a legacy together is the
              ultimate goal.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#F8F8F8]">
        <div className="p-5 bg-[#686868] text-4xl font-bold text-[#F8DA78] md:text-xl">
          Our Services
        </div>
        <div className="flex flex-col gap-2 py-12 px-28 mt-4 w-auto m-auto lg:px-32">
          <p className="xl:text-[0.5rem]">
            "Our company specializes in providing both reefer and dry van
            transportation services.
          </p>
          <p className="xl:text-[0.5rem]">
            Our reefer services involve transporting temperature-sensitive
            goods, such as fresh produce and pharmaceuticals, in refrigerated
            trailers. These trailers are equipped with temperature control
            systems to ensure that your goods are delivered in the same
            condition as when they were picked up.
          </p>
          <p className="xl:text-[0.5rem]">
            Our dry van services involve transporting non-temperature sensitive
            goods, such as clothing and furniture, in standard trailers. These
            trailers are designed to protect your goods from the elements and
            ensure that they are delivered in the same condition as when they
            were picked up.
          </p>
          <p className="xl:text-[0.5rem]">
            Our expedited box delivery service is designed for customers who
            need their cargo delivered as quickly as possible. With our advanced
            logistics and experienced team of drivers, we are able to transport
            your boxes to their destination in the shortest time possible.
            Whether it's for time-sensitive freight or high-value goods, our
            expedited box delivery service is the ideal choice for customers who
            demand speed and reliability.
          </p>
          <p className="xl:text-[0.5rem]">
            Our RV hauling services are designed to safely and efficiently
            transport your recreational vehicle to any destination, whether it's
            across town or across the country. Our experienced drivers have the
            expertise and equipment to handle even the largest RVs, ensuring
            that your vehicle arrives at its destination in the same condition
            as it left.
          </p>
          <p className="xl:text-[0.5rem]">
            Our Pilot car services are also available to assist with the safe
            and efficient transport of over-dimensional loads. Our highly
            trained and certified pilot car operators will lead the way and
            provide necessary escorts, ensuring that your cargo arrives safely
            and on time.
          </p>
          <p className="xl:text-[0.5rem]">
            We pride ourselves on providing reliable and efficient service, and
            our team of experienced drivers and logistics professionals are
            dedicated to ensuring that your goods are delivered on time and in
            perfect condition."
          </p>
        </div>
        <div className="text-center text-[#737373] text-4xl font-bold p-7">
          Join the Brotherhood
        </div>
        <div className="flex bg-[#F8F8F8 justify-evenly gap-10 m w-2/3 align-middle m-auto py-12 ">
          <Link to="/contact">
            <div className="">
              <img src={image_21} className="max-w-full" />
              <div className="text-center font-semibold text-xs bg-[#757575] text-white rounded-sm p-1 -my-1">
                Future Customer
              </div>
            </div>
          </Link>
          <Link to="/contact">
            <div className="">
              <img src={image_22} className="max-w-full" />
              <div className="text-center font-semibold text-xs bg-[#757575] text-white rounded-sm p-1 -my-1">
                Future Operator
              </div>
            </div>
          </Link>
          <Link to="/contact">
            <div>
              <img src={image_23} className="w-full" />
              <div className="text-center font-semibold text-[0.6rem] bg-[#757575] text-white rounded-sm py-1 -my-1">
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
