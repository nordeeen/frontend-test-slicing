import React from 'react';
import Banner from '../assets/banner.png';
import BannerSecond from '../assets/banner-second.png';

const HeroContent = () => {
  return (
    <div className="w-full h-[500px] flex justify-between px-8 mb-20">
      <div className="flex flex-col items-start space-y-16">
        <div className="w-[600px] pr-8">
          <h4 className="text-5xl font-semibold text-left">
            Pituku: Jual Beli Sampah Mudah dan Terpercaya
          </h4>
        </div>
        <div className="w-[700px]">
          <p className="text-3xl font-normal text-left text-gray-600">
            Platform Pituku memudahkan transaksi jual beli sampah dan limbah
            berkualitas dengan harga terbaik, transparan, dan terpercaya
          </p>
        </div>
        <a
          href="/#"
          className="px-12 py-5 bg-white text-[#2E7D32] border-2 border-[#2E7D32] text-lg font-semibold uppercase rounded-lg"
        >
          pesan sekarang
        </a>
      </div>
      <div className="flex w-full">
        <img
          src={Banner}
          alt="banner-pertama"
          loading='eager'
          className="w-[100%] h-auto object-cover"
        />
        <img
          src={BannerSecond}
          alt="banner-second"
          loading='eager'
          className="w-[400px] object-cover"
        />
      </div>
    </div>
  );
}

export default HeroContent