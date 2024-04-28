import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NewProduct.css";
import NewProductsSlider from "../newProductsSlider/NewProductsSlider";

const NewProducts = () => {
  const [activeButton, setActiveButton] = useState("");

  const handleButtonClick = (buttonClass) => {
    setActiveButton(buttonClass);
  };
  return (
    <div className="mt-6 container mx-auto">
      <div>
        <div>
          <h1 className="text-center pt-3 text-4xl font-medium">
            New <span className="border-b-2 pb-6">Prod</span>ucts
          </h1>
          <div className="flex gap-3 md:gap-20 items-center justify-center uppercase my-16 text-xl font-medium">
            <button
              onClick={() => handleButtonClick("featured")}
              className={`button ${
                activeButton === "featured"
                  ? "active-link hover:active-link"
                  : "hover:active-link"
              }`}
            >
              Featured
            </button>
            <button
              onClick={() => handleButtonClick("best")}
              className={`button ${
                activeButton === "best"
                  ? "active-link hover:active-link"
                  : "hover:active-link"
              }`}
            >
              Best Seller
            </button>
            <button
              onClick={() => handleButtonClick("latest")}
              className={`button ${
                activeButton === "latest"
                  ? "active-link hover:active-link"
                  : "hover:active-link"
              }`}
            >
              Latest
            </button>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default NewProducts;
