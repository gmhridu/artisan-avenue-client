import React from "react";
import Carousel from "react-multi-carousel";
import { reviewMessage } from "../../utils/dataProvider";
import "react-multi-carousel/lib/styles.css";
import { MdMaximize } from "react-icons/md"; // Import MdMaximize icon

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const CustomersReview = () => {
 
  return (
    <div className="container relative mx-auto my-10 border rounded-xl">
      <div
        className=""
        style={{
          backgroundImage: `url('https://i.ibb.co/XtP13sp/testimonial-BG.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "450px",
        }}
      >
        <Carousel
          className="z-20"
          responsive={responsive}
          autoPlay={true}
          swipeable={false}
          draggable={false}
          ssr={true}
          infinite={true}
          autoPlaySpeed={1500}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          partialVisible={false}
          itemClass="carousel-item-padding-40-px"
          containerClass="carousel-container"
          removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
        >
          {reviewMessage.map((rev, index) => (
            <figure
              key={index}
              className="max-w-screen-md min-h-[400px] flex flex-col items-center justify-center mx-auto text-center"
            >
              <svg
                className="w-10 h-10 mx-auto mb-3 text-[#cfae7a] dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 14"
              >
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
              </svg>
              <blockquote>
                <p className="text-2xl italic font-medium text-gray-900 dark:text-white">
                  {rev?.review}
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                <img
                  className="w-6 h-6 rounded-full"
                  src={rev?.avatar}
                  alt="profile picture"
                />
                <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                  <cite className="pe-3 font-medium text-[#cfae7a] text-xl dark:text-white">
                    {rev?.name}
                  </cite>
                  <cite className="ps-3 text-sm text-[#888] dark:text-gray-400">
                    {rev?.position}
                  </cite>
                </div>
              </figcaption>
            </figure>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CustomersReview;
