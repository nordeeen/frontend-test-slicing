import React from 'react';
import smallContent from '../assets/small-content.png';
import priceContent from '../assets/feature1.png';

const MainPrice = () => {
  return (
    <div className="w-full h-auto bg-white px-6 py-16 flex justify-around items-center mt-16">
      <div className="flex flex-col justify-between items-start py-6">
        <img
          src={smallContent}
          alt="icon-content"
          loading="eager"
          className="w-[65px] h-[65px] object-contain"
        />
        <div className="w-[600px]">
          <h4 className="text-5xl text-black font-semibold text-left leading-relaxed">
            Harga Terbaik dan Stok Terlengkap
          </h4>
        </div>
        <div className="w-[700px] px-3 py-6">
          <p className="text-3xl text-black font-normal text-left">
            Dapatkan harga terbaik sampah dan limbah dengan stok terlengkap dan
            terupdate dari mitra kami yang terintegrasi
          </p>
        </div>
      </div>
      <div
        data-aos="fade-left"
        data-aos-once="true"
        data-aos-duration="1000"
        className="px-8">
        <img
          src={priceContent}
          alt="price-content"
          loading="eager"
          className="w-[700px] h-auto object-cover"
        />
      </div>
    </div>
  );
}

export default MainPrice