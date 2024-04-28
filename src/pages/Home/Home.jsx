import React from 'react';
import Banner from '../../components/Banner';
import WhoWeAre from '../../components/WhoWeAre';
import NewProducts from '../../components/NewProducts/NewProducts';
import NewProductsSlider from '../../components/newProductsSlider/NewProductsSlider';
import LatestCollection from '../../components/LatestCollections/LatestCollection';
import FeaturedProduct from '../../components/FeaturedProduct/FeaturedProduct';
import OurCategory from '../../components/OurCategory/OurCategory';
import FreeShipping from '../../components/FreeShipping/FreeShipping';

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="border-b pb-8">
        <WhoWeAre />
      </div>
      <NewProducts />
      <LatestCollection />
      <FeaturedProduct />
      <OurCategory />
      <FreeShipping/>
    </div>
  );
};

export default Home;