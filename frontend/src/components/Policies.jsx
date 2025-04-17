import React from "react";
import { assets } from "../assets/assets";

const Policies = () => {
  return (
    <div className=" flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-2 text-xs sm:text-sm md:text-base lg:text-xl text-gray-500 ">
      <div className="">
        <img className="py-1 w-12  m-auto" src={assets.exchange_icon} alt="" />
        <h6 className="py-1 font-semibold text-sm"> EASY EXCHANGE PLOICY</h6>
        <p className="py-1 capitalize font-semibold text-sm text-gray-500">
          we offer hassle free exchange policy
        </p>
      </div>
      <div className="">
        <img className="py-1 w-12  m-auto" src={assets.quality_icon} alt="" />
        <h6 className="py-1 font-semibold text-sm"> EASY EXCHANGE PLOICY</h6>
        <p className="py-1 capitalize font-semibold text-sm text-gray-500">
          we offer hassle free exchange policy
        </p>
      </div>
      <div className="">
        <img className="py-1 w-12 m-auto" src={assets.support_img} alt="" />
        <h6 className="py-1 font-semibold text-sm"> EASY EXCHANGE PLOICY</h6>
        <p className="py-1 capitalize font-semibold text-sm text-gray-500">
          we offer hassle free exchange policy
        </p>
      </div>
    </div>
  );
};

export default Policies;
