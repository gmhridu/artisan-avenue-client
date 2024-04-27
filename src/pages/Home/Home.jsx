import React from 'react';
import Banner from '../../components/Banner';
import WhoWeAre from '../../components/WhoWeAre';
import NewProducts from '../../components/NewProducts/NewProducts';
import NewProductsSlider from '../../components/newProductsSlider/NewProductsSlider';
import LatestCollection from '../../components/LatestCollections/LatestCollection';

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="border-b pb-8">
        <WhoWeAre />
      </div>
      <NewProducts />
      <LatestCollection/>
    </div>
  );
};

export default Home;