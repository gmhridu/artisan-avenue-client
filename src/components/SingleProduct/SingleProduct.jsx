import React, { useEffect, useState } from "react";
import { FaArrowDown, FaArrowUp, FaFacebookSquare } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { MdLocalPrintshop } from "react-icons/md";
import { useLoaderData, useParams } from "react-router-dom";

const SingleProduct = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const singleCraft = data && data._id === id ? data : null;
  console.log(singleCraft)
  const [hoveredImage, setHoveredImage] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const image = singleCraft?.image;
    setSelectedImage(image);
  },[singleCraft])

  const handleClick = (newImage) => {
    setHoveredImage(newImage)
    setSelectedImage(newImage)
  }

  return (
    <div className="container mx-auto min-h-screen my-2 md:my-6 md:py-7 flex flex-col justify-around gap-4 px-2">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* left side */}
        <div className="flex flex-col gap-2 cursor-pointer">
          <div className="rounded-xl w-md:[300px] md:h-[400px] object-cover bg-white p-2 border-2 md:p-4 md:border-[15px] border-[#121212] transition-all duration-300">
            <img
              src={hoveredImage || singleCraft?.image}
              className="w-full h-full"
              alt=""
            />
          </div>
          <div className="flex gap-3">
            <div
              className={`rounded-xl w-[150px] h-[150px] object-cover bg-white p-2 border-2 md:p-1 md:border-[3px] border-[#121212] transition-all duration-300 ${
                selectedImage === singleCraft?.hoveredImg
                  ? "border-green-400"
                  : ""
              }`}
              onClick={() => handleClick(singleCraft?.hoveredImg)}
            >
              <img
                src={singleCraft?.hoveredImg}
                className="w-full h-full rounded-md"
                alt=""
              />
            </div>
            <div
              className={`rounded-xl w-[150px] h-[150px] object-cover bg-white p-2 border-2 md:p-1 md:border-[3px] border-[#121212] transition-all duration-300 ${
                selectedImage === singleCraft?.image ? "border-green-400" : ""
              }`}
              onClick={() => handleClick(singleCraft?.image)}
            >
              <img
                src={singleCraft?.image}
                className="w-full h-full rounded-md"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* middle  */}
        <div className="md:col-span-2">
          <div className="border-b pb-4">
            <h1 className="text-3xl font-semibold">{singleCraft?.name}</h1>
          </div>
          <div className="border-b space-y-4">
            <p className="text-xl font-medium hover:text-[#cfae7a] text-[#757575] pt-4">
              Common Good
            </p>
            <p className="text-xl font-bold">$ {singleCraft?.price}</p>
            {/* rating */}
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <div>
                <p>
                  (No reviews yet){" "}
                  <span className="text-[#757575] hover:text-[#cfae7a]">
                    Write a Review
                  </span>
                </p>
              </div>
            </div>
            <p className="pt-2 font-bold">
              SKU: {""} {""}
              <span className="font-normal text-[#757575]">SM13</span>
            </p>
            <p className="pt-2 font-bold pb-4">
              Condition: {""} {""}
              <span className="font-normal text-[#757575]">New</span>
            </p>
          </div>
          <div className="my-4 pt-3">
            <form onSubmit={handleSubmit} className="max-w-xs">
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="add">Add To Wish List</option>
                <option value="create">Create New Wish List</option>
              </select>
            </form>
          </div>
          <div className="flex gap-4 cursor-pointer">
            <div className="bg-[#333] p-2 hover:bg-[#cfae7a] rounded-md">
              <FaFacebookSquare className="text-white text-lg" />
            </div>
            <div className="bg-[#333] p-2 hover:bg-[#cfae7a] rounded-md">
              <IoMailSharp className="text-white text-lg" />
            </div>
            <div className="bg-[#333] p-2 hover:bg-[#cfae7a] rounded-md">
              <MdLocalPrintshop className="text-white text-lg" />
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="bg-[#f7f7f7] p-2 md:h-1/2 space-y-4">
          <div className="space-y-3 px-3">
            <p className="text-[#757575]">
              Color: <span className="text-red-600">*</span>
            </p>
            {/* colors */}
            <div className="flex gap-4">
              <div className="border-2 rounded-full h-12 w-12 border-[#333] flex flex-col items-center justify-center">
                <div className="h-10 w-10 bg-red-500 rounded-full"></div>
              </div>
              <div className="border-2 rounded-full h-12 w-12 border-[#333] flex flex-col items-center justify-center">
                <div className="h-10 w-10 bg-[#08420F] rounded-full"></div>
              </div>
              <div className="border-2 rounded-full h-12 w-12 border-[#333] flex flex-col items-center justify-center">
                <div className="h-10 w-10 bg-[#0012FF] rounded-full"></div>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-[#757575] pt-3">Quantity</p>
              <div className="flex gap-4 w-3/6">
                <div className="bg-white p-2 w-14 rounded-md">
                  <FaArrowUp className="text-lg" />
                </div>
                <div className="rounded-md">
                  <input
                    type="text"
                    defaultValue={1}
                    className="bg-white outline-none w-full h-full border-none text-center rounded-md"
                  />
                </div>
                <div className="bg-white p-2 w-14 rounded-md">
                  <FaArrowDown className="text-lg" />
                </div>
              </div>
            </div>

            <div className="py-2">
              <button className="btn  bg-[#cfae7a] text-white">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="border flex-grow rounded-md">
        <div className="border-b pb-1">
          <div className="p-2">
            <h3 className="text-[#cfae7a] text-lg font-normal">
              <span className="border-b border-[#cfae7a] pb-2">Descrip</span>
              tion
            </h3>
          </div>
        </div>
        <div>
          <div className="p-3">
            <p>{singleCraft?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
