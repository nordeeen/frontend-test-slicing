import React from 'react';
import contentPage from '../assets/content-page.png';
import smallContent from '../assets/small-content.png';
import thumb from '../assets/pituku-thumbnail.png';

const MainContent = () => {
  return (
    <div className="w-full h-auto bg-white px-6 py-3 flex justify-between items-center">
      <div
        data-aos="flip-left"
        data-aos-once="true"
        data-aos-duration="1000"
        className="w-full h-full flex justify-center items-start px-6"
      >
        <img
          src={contentPage}
          alt="content-img"
          loading="eager"
          className="w-[80%] h-auto object-cover"
        />
      </div>
      <div className="w-full h-auto flex flex-col justify-between">
        <img
          src={smallContent}
          alt="icon-content"
          loading="eager"
          className="w-[65px] h-[65px] object-contain"
        />
        <div className="space-y-8">
          <div className="w-full">
            <h3 className="text-black font-semibold text-5xl text-left leading-tight">
              Platform Jual Beli Sampah dan Limbah Terbesar & Terintegrasi
            </h3>
          </div>
          <div className="w-[600px]">
            <p className="text-black font-normal text-3xl text-letf">
              Kami memiliki ratusan mitra produsen dan pengepul sampah yang
              terintegrasi dengan stok/persediaan terbesar di indonesia
            </p>
          </div>
          <img
            data-aos="zoom-in-out"
            data-aos-once="true"
            data-aos-duration="1000"
            src={thumb}
            alt="pituku-thumb"
            loading="eager"
            className="w-[700px] h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default MainContent