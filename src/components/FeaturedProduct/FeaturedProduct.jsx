import React from 'react';
import NewProductsSlider from '../newProductsSlider/NewProductsSlider';

const FeaturedProduct = () => {
  return (
    <div className="my-6 container mx-auto">
      <h1 className="text-center pt-3 text-4xl font-medium">
        Feature <span className="border-b-2 pb-6">Prod</span>ucts
      </h1>
      <div className='my-6'>
        <NewProductsSlider/>
      </div>
    </div>
  );
};

export default FeaturedProduct;