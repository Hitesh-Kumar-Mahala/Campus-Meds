import collegeImg from '../assets/nitrr-img.jpeg';
import collegeImg5 from '../assets/clgImg5.jpg';
import collegeImg6 from '../assets/clgImg6.jpg';
import React from 'react';

const HomeSlider = () => {
  const images = [collegeImg,collegeImg5,collegeImg6];

  return (
    <div className="w-screen h-[56vh] overflow-hidden relative z-0">
      <div className="pb-6 flex gap-0">
        {
          images.map((url, index) => (
            <div key={index} className="w-1/3 h-[56vh]">
              <img
                src={url}
                alt={`slide-${index}`}
                className="w-full h-[56vh] object-cover"
              />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default HomeSlider;
