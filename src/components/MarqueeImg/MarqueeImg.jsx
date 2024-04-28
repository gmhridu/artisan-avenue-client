import React from 'react';
import Marquee from 'react-fast-marquee';
import { marqueeImg } from '../../utils/dataProvider';

const MarqueeImg = () => {
  return (
    <div className="my-14 bg-[#F5F5F5] py-14">
      <div className="container mx-auto">
        <Marquee
          autoFill={true}
          speed={60}
          gradient={true}
          gradientColor={"#F5F5F5"}
          gradientWidth={200}
        >
          {marqueeImg?.map((img, index) => (
            <img src={img?.url} alt="" key={index} className="mr-16 h-24" />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeImg;