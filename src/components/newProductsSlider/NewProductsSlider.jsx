import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import { MdMaximize } from "react-icons/md";
import "./newProductSlider.css";
import { newProductImg, hoveProducts } from "../../utils/dataProvider";
import { NavLink } from "react-router-dom";
import { FaCartArrowDown, FaRegEye } from "react-icons/fa";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 2,
    slidesToSlide: 1,
  },
};

const NewProductsSlider = () => {
  const [hoveredImages, setHoveredImages] = useState(
    new Array(newProductImg.length).fill(false)
  );

  const handleMouseEnter = (index) => {
    const updatedHoveredImages = [...hoveredImages];
    updatedHoveredImages[index] = true;
    setHoveredImages(updatedHoveredImages);
  };

  const handleMouseLeave = (index) => {
    const updatedHoveredImages = [...hoveredImages];
    updatedHoveredImages[index] = false;
    setHoveredImages(updatedHoveredImages);
  };

  return (
    <div className="w-full cursor-pointer">
      <Carousel
        className="z-20"
        responsive={responsive}
        autoPlay={false}
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
        partialVisible={false}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {newProductImg?.map((imageUrl, index) => (
          <div
            className="slider relative"
            key={index}
            onMouseOver={() => handleMouseEnter(index)}
            onMouseOut={() => handleMouseLeave(index)}
          >
            <img
              className={`rounded-xl w-full bg-white p-2 border-2 md:p-4 md:border-[15px] border-[#121212] transition-all duration-300 ${
                hoveredImages[index] ? "transform scale-105" : ""
              }`}
              src={
                hoveredImages[index] ? hoveProducts[index]?.url : imageUrl?.url
              }
              alt="pic"
            />
            <div className="my-5">
              <h1 className="text-lg">Product Name</h1>
              <p>Price</p>
            </div>
            {hoveredImages[index] && (
              <>
                <div
                  className="absolute  flex flex-col 
              gap-3 bottom-48 right-9"
                >
                  {/* Your buttons here */}
                  <NavLink
                    to={"/singleProduct"}
                    className="text-black p-2 bg-white rounded-xl"
                  >
                    <FaRegEye className="text-3xl" />
                  </NavLink>
                  <NavLink
                    to={"/singleProduct"}
                    className="text-black p-2 bg-white rounded-xl"
                  >
                    <FaCartArrowDown className="text-3xl" />
                  </NavLink>
                </div>
                <div className="absolute top-10 right-2 bg-green-500 p-2">
                  <div className="rating">
                    <h3 className="text-lg text-white mr-2">5</h3>
                    <input
                      type="radio"
                      name="rating-4"
                      className="mask mask-star-2 bg-white"
                    />
                    <input
                      type="radio"
                      name="rating-4"
                      className="mask mask-star-2 bg-white"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-4"
                      className="mask mask-star-2 bg-white"
                    />
                    <input
                      type="radio"
                      name="rating-4"
                      className="mask mask-star-2 bg-white"
                    />
                    <input
                      type="radio"
                      name="rating-4"
                      className="mask mask-star-2 bg-white"
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default NewProductsSlider;
