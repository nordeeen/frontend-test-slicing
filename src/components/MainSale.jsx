import React from 'react'
import smallContent from '../assets/small-content.png';
import imgHero from '../assets/feature3.png';

const MainSale = () => {
  return (
    <div className="w-full h-auto bg-white px-6 py-3 flex flex-col justify-center items-center space-y-6 my-10">
      <img
        src={smallContent}
        alt="icon-content"
        className="w-[65px] h-[65px] object-contain"
      />
      <div className="w-[1300px]">
        <h4 className="text-5xl font-semibold text-center text-black">
          Tingkatkan Penjualan Sampah dan Limbah dengan Menjadi Mitra Pituku
        </h4>
      </div>
      <div className="w-[1300px]">
        <p className="text-3xl font-normal text-center text-gray-600 mt-6">
          Bergabung bersama kami dengan menjadi Mitra untuk mendapatkan akses
          pembeli sampah dan limbah di indonesia
        </p>
      </div>
      <div className="flex items-center justify-center mt-6">
        <img
          src={imgHero}
          alt="img-bg"
          className="w-[70%] h-auto object-cover"
        />
      </div>
    </div>
  );
}

export default MainSale