import React from "react";
import offerImg from "../../assets/offer.png";

const LatestCollection = () => {
  return (
    <div className="my-[3rem] flex flex-col md:flex-row justify-between items-center px-2 space-y-4">
        <div className="">
          <h2 className="text-xl md:text-4xl text-[#5b5b5b] font-semibold text-center">
            Our Latest Collection Of Original
          </h2>
          <h2 className="text-xl md:text-4xl text-[#121212] font-semibold text-center md:text-left">
            Artworks & Paintings
          </h2>
        </div>
      <div className="relative">
        <div className="absolute inset-4 bg-black opacity-0 hover:opacity-30 transition-opacity duration-300 rounded-xl"></div>
        <div className="hover:bg-blend-overlay cursor-pointer">
          <img src={offerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LatestCollection;
