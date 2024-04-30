import React from 'react';
import aboutImg from '../../assets/newProducts/firstartH.jpg'
import CustomersReview from '../../components/CustomersReview/CustomersReview';

const About = () => {
  return (
    <div className="my-5">
      <div className="container mx-auto">
        <div className="flex justify-evenly items-center">
          <div className="w-2/3 space-y-6">
            <h3 className='text-xs text-[#757575] font-normal'>Our Story</h3>

            <h1 className='text-4xl font-normal'>Your local skilled craftmanship</h1>

            <p className='text-[#757575]'>
              In our community, skilled craftsmanship isn't just a tradition;
              it's an art form passed down
              <br />
              through generations. From intricate
              woodcarvings to meticulously woven textiles, our artisans infuse
              every
              <br />
              creation with passion and expertise. Each piece tells a
              story of dedication and pride, embodying the rich
              <br />
              heritage of our
              region.
            </p>

            <button className="btn btn-primary">Learn More</button>
          </div>
          <div>
            <img src={aboutImg} className="rounded-xl" alt="" />
          </div>
        </div>
      </div>
      <CustomersReview/>
    </div>
  );
};

export default About;