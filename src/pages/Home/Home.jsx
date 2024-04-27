import React from 'react';
import Banner from '../../components/Banner';
import WhoWeAre from '../../components/WhoWeAre';
import NewProducts from '../../components/NewProducts/NewProducts';

const Home = () => {
  return (
    <div>
      <Banner />
      <div className='border-b pb-8'>
        <WhoWeAre />
      </div>
      <NewProducts/>
    </div>
  );
};

export default Home;