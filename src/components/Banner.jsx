import React from "react";
import Carousel from "react-multi-carousel";
import { sliderImg } from "../utils/dataProvider";
import { MdMaximize } from "react-icons/md";

import "react-multi-carousel/lib/styles.css";
import { GoDotFill } from "react-icons/go";

const responsive = {
  module: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};
const Banner = () => {
  const CustomDot = ({ onClick, active }) => {
    return (
      <li
        className={active ? "text-[#cfae7a]" : "text-white"}
        onClick={() => onClick()}
      >
        <MdMaximize className="text-5xl" />
      </li>
    );
  };

  return (
    <div className="min-h-[600px] flex flex-col  md:flex-row items-center justify-between">
      {/* Left side */}
      <div className="flex-1 mx-10 space-y-6">
        <h1 className="text-left text-3xl md:text-[55px] text-[#121212] font-bold">
          Latest Painting Collection
        </h1>
        <p className="text-lg font-normal text-[#7a7a7a]">
          Discover the world through original paintings for sale
        </p>
        <button className="btn bg-[#cfae7a] text-white">Shop Now</button>
      </div>
      {/* Right side */}
      {/* carousel */}
      <div className="w-full md:w-[40%]">
        <Carousel
          className="z-20"
          responsive={responsive}
          autoPlay={true}
          swipeable={true}
          draggable={false}
          showDots
          arrows
          ssr={true}
          infinite={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          customDot={<CustomDot />}
          partialVisible={false}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          {sliderImg?.map((imageUrl, index) => {
            return (
              <div className="slider" key={index}>
                <img className="rounded-xl w-full" src={imageUrl?.url} alt="pic" />
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
