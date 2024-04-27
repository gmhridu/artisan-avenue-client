import React from "react";

const WhoWeAre = () => {
  return (
    <div className="my-4 container mx-auto px-2">
      <div className="flex flex-col md:flex-row md:gap-8 items-center justify-center">
        <div className="relative">
          {/* Overlay animation */}
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-30 transition-opacity duration-300"></div>
          <div className="hover:bg-blend-overlay cursor-pointer">
            <img
              src={`https://i.ibb.co/8syrSgk/banner-about.jpg`}
              alt=""
              className="w-full rounded-md"
            />
          </div>
        </div>
        <div className="ml-4 md:w-1/2 space-y-2 md:space-y-8">
          <h3 className="text-2xl md:text-3xl pt-3 md:pt-0 font-medium">ABOUT</h3>
          <h1 className="text-3xl md:text-5xl font-semibold md:pb-6">HELENARTS</h1>
          <p className="font-normal">
            HELENARTS is dedicated to creating unique and captivating artworks
            that inspire and evoke emotions. With a focus on blending
            traditional techniques with modern aesthetics, we strive to bring
            beauty and meaning to every piece we create.
          </p>
          <p className="font-normal">
            Our talented artists are committed to pushing the boundaries of
            creativity and craftsmanship. Through our dedication to quality and
            innovation, we aim to leave a lasting impression on the world of art
            and design.
          </p>
          <img src={`https://i.ibb.co/gTkCW11/sign.png`} alt="" />
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
