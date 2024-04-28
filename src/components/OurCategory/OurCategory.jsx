
import React from 'react';
import { categoryImg } from '../../utils/dataProvider';
import "react-multi-carousel/lib/styles.css";
import Carousel from 'react-multi-carousel';
import './OurCategory.css'


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

const OurCategory = () => {
  
  return (
    <div className="bg-[#e1dcd8] py-[50px]">
      <div className="flex flex-col md:flex-row items-center justify-between container mx-auto">
        <div className='flex flex-col items-center justify-center space-y-3'>
            <h1 className="text-center pt-3 text-4xl font-medium">
              <span className="border-b-2 pb-3 border-gray-400">Our</span>{" "}
              Category
            </h1>
            <p className="text-xl pt-10">
              Discover the world through
              <br />
              original paintings for sale
            </p>
        </div>
        <div className="w-full md:w-[50%] cursor-pointer">
          <Carousel
            className="z-20"
            responsive={responsive}
            autoPlay={true}
            swipeable={true}
            draggable={true}
            ssr={true}
            infinite={true}
            autoPlaySpeed={1500}
            keyBoardControl={true}
            customTransition="all .4"
            transitionDuration={500}
            partialVisible={false}
            itemClass="carousel-item-padding-40-px"
            containerClass="carousel-container"
            removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
          >
            {categoryImg?.map((imageUrl, index) => {
              return (
                <div className="slider" key={index}>
                  <img
                    className="rounded-xl w-full"
                    src={imageUrl?.url}
                    alt="pic"
                  />
                  <div className="my-5">
                    <h1 className="text-lg">{imageUrl?.title}</h1>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default OurCategory;