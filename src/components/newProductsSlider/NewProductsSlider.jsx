import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import { MdMaximize } from "react-icons/md";
import "./newProductSlider.css";
import { newProductImg, hoveProducts } from "../../utils/dataProvider";
import "react-multi-carousel/lib/styles.css";
import { Link, NavLink, useLoaderData } from "react-router-dom";
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
  const newCraft = useLoaderData()
  console.log(newCraft)
  const { rating, name, price, description, category, image, hoveredImg, _id } =
    newCraft;
  const [hoveredImages, setHoveredImages] = useState(
    new Array(newCraft?.length).fill(false)
  );

  const handleMouseEnter = (e, index) => {
    e.preventDefault();
    console.log(index)
    const updatedHoveredImages = [...hoveredImages];
    updatedHoveredImages[index] = true;
    setHoveredImages(updatedHoveredImages);
    console.log(newCraft[index]?.hoveredImg);
  };

  
  const handleMouseLeave = (e, index) => {
    e.preventDefault();
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
        {newCraft?.map((craft, index) => (
          <Link
            to={`singleProduct/${craft?._id}`}
            className="slider relative"
            key={craft?._id}
          >
            <div
              className="h-[600px] w-[450px]"
              onMouseOver={(e) => handleMouseEnter(e, index)}
              onMouseOut={(e) => handleMouseLeave(e, index)}
            >
              <img
                className={`rounded-xl w-full h-full object-cover bg-white p-2 border-2 md:p-4 md:border-[15px] border-[#121212] transition-all duration-300
              `}
                src={hoveredImages[index] ? craft?.hoveredImg : craft?.image}
                alt="pic"
              />
            </div>
            <div className="my-5">
              <h1 className="text-lg">{craft?.name}</h1>
              <p>$ {craft?.price}</p>
            </div>
            {newCraft[index]?.hoveredImg && (
              <>
                <div
                  className="absolute  flex flex-col 
              gap-3 bottom-48 right-16 z-20"
                >
                  <NavLink
                    to={`singleProduct/${craft?._id}`}
                    className="text-black p-2 bg-white rounded-xl"
                  >
                    <FaRegEye className="text-3xl" />
                  </NavLink>
                  <NavLink
                    to={`singleProduct/${craft?._id}`}
                    className="text-black p-2 bg-white rounded-xl"
                  >
                    <FaCartArrowDown className="text-3xl" />
                  </NavLink>
                </div>
                <div className="absolute top-[4.1rem] right-14 bg-green-500 p-2 rounded-lg">
                  <div className="rating">
                    <h3 className="text-lg text-white mr-2">{craft?.rating}</h3>
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
          </Link>
        ))}
      </Carousel>
    </div>
  );
};

export default NewProductsSlider;
