import React from 'react';
import smallContent from '../assets/small-content.png';
import firstUser from '../assets/user-img-1.png';
import SecondUser from '../assets/user-img-2.png';

const MainTestimonials = () => {
  return (
    <div className="w-full bg-white py-6 px-6 flex flex-col justify-center items-center">
      <img
        src={smallContent}
        alt="icon-content"
        loading="eager"
        className="w-[65px] h-[65px] object-contain"
      />
      <h4 className="text-5xl text-black text-center font-semibold mb-8">
        Testimoni Pembeli dan Mitra
      </h4>
      <p className="text-3xl font-medium text-gray-800 text-center">
        They are doing great things with us
      </p>
      <div className="flex justify-between items-center gap-8 mt-8">
        <img src={firstUser} alt="user-1" loading="eager" className="w-[600px] h-auto object-contain bg-white" />
        <img src={SecondUser} alt="user-2" loading="eager" className="w-[600px] h-auto object-contain bg bg-white" />
      </div>
    </div>
  );
}

export default MainTestimonials