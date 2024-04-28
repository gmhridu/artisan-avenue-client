import React from 'react';
import latestBanner from "../../assets/latestbanner.jpg";
import { FaHandHoldingUsd, FaShippingFast } from 'react-icons/fa';
import { BiSupport } from 'react-icons/bi';

const FreeShipping = () => {
  return (
    <div className="flex flex-col md:flex-row items-center px-2 md:px-0 justify-center my-8 gap-4 md:gap-10 container mx-auto">
      <div className="relative cursor-pointer">
        <div className="absolute inset-3 bg-black opacity-0 hover:opacity-30 transition-opacity duration-300 rounded-xl"></div>
        <div className="hover:bg-blend-overlay cursor-pointer">
          <img src={latestBanner} alt="" />
        </div>
      </div>
      <div className="md:flex-1 md:space-y-14 space-y-3">
        <div>
          <FaShippingFast className="text-3xl md:text-5xl" />
          <h1 className="text-2xl font-medium">Free Shipping</h1>
          <p>Enjoy free shipping on all orders!</p>
        </div>
        <div>
          <BiSupport className="text-3xl md:text-5xl" />
          <h1 className="text-2xl font-medium">Online Support</h1>
          <p>24/7 online support available for all your queries.</p>
        </div>
        <div>
          <FaHandHoldingUsd className="text-3xl md:text-5xl" />
          <h1 className="text-2xl font-medium">Cash On Delivery</h1>
          <p>Convenient cash on delivery option for hassle-free payments.</p>
        </div>
      </div>
    </div>
  );
};

export default FreeShipping;
