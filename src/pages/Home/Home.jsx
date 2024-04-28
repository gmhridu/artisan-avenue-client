import React from 'react';
import Banner from '../../components/Banner';
import WhoWeAre from '../../components/WhoWeAre';
import NewProducts from '../../components/NewProducts/NewProducts';
import NewProductsSlider from '../../components/newProductsSlider/NewProductsSlider';
import LatestCollection from '../../components/LatestCollections/LatestCollection';
import FeaturedProduct from '../../components/FeaturedProduct/FeaturedProduct';
import OurCategory from '../../components/OurCategory/OurCategory';
import FreeShipping from '../../components/FreeShipping/FreeShipping';
import CustomersReview from '../../components/CustomersReview/CustomersReview';
import MarqueeImg from '../../components/MarqueeImg/MarqueeImg';

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
      <FreeShipping />
      <CustomersReview />
      <MarqueeImg/>
    </div>
  );
};

export default Home;