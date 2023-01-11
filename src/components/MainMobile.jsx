import React from 'react';
import mobilePlay from '../assets/pituku-mobile-login.png';
import playStore from '../assets/play-store.png';
import appStore from '../assets/app-store.png';

const MainMobile = () => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-once="true"
      data-aos-duration="1000"
      className="w-full h-auto bg-white px-3 py-10 flex justify-center items-center space-x-8">
      <img
        src={mobilePlay}
        alt="mobile"
        loading="eager"
        className="w-[280px] h-auto object-contain px-3 py-3 bg-black rounded-xl"
      />
      <div className="flex flex-col">
        <div className="w-[600px] h-auto mb-4">
          <h3 className="text-5xl font-semibold text-left text-[#2E7D32] leading-tight">
            Dapatkan Aplikasi Versi Mobile
          </h3>
        </div>
        <div className="flex flex-wrap gap-3">
          <img
            src={playStore}
            alt="playstore"
            loading="eager"
            className="w=[60px] h-auto object-contain hover:cursor-pointer"
          />
          <img
            src={appStore}
            alt="appstore"
            loading="eager"
            className="w=[60px] h-auto object-contain hover:cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default MainMobile;