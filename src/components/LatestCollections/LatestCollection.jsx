import React from "react";
import offerImg from '../../assets/offer.png'

const LatestCollection = () => {
  return (
    <div className="my-[3rem] flex flex-col md:flex-row justify-between items-center px-2 space-y-4">
      <div>
        <h2 className="text-xl md:text-4xl text-[#5b5b5b] font-semibold text-center">
          Our Latest Collection Of Original
        </h2>
        <h2 className="text-xl md:text-4xl text-[#121212] font-semibold text-center">Artworks & Paintings</h2>
      </div>
      <div>
        <img src={offerImg} alt="" />
      </div>
    </div>
  );
};

export default LatestCollection;
