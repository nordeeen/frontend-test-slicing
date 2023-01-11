import React from 'react';
import smallContent from '../assets/small-content.png';
import Testi1 from '../assets/testi1.png';
import Testi2 from '../assets/testi2.png';
import Testi3 from '../assets/testi3.png';
import Testi4 from '../assets/testi4.png';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';

const MainSwiper = () => {
  const swiper = useSwiper();
  return (
    <div className="w-full h-auto bg-white px-6 flex justify-between items-center flex-col py-16">
      <img
        src={smallContent}
        alt="icon-content"
        loading="eager"
        className="w-[65px] h-[65px] object-contain"
      />
      <div className="w-[60%] mb-10">
        <h4 className="text-5xl font-medium text-center text-black">
          Kelola Sampah dan Limbah dengan Mudah sebagai Mitra
        </h4>
      </div>
      <div className="w-[65%]">
        <p className="text-3xl font-semibold text-center text-black">
          Mitra Pituku dapat melakukan pembaharuan stok, harga penjualan,
          kualitas sampah dan limbah secara real-time
        </p>
      </div>
      <div className="py-6">
        <button
          className="bg-green-500 rounded-full w-4 h-4 mr-4"
          onClick={() => swiper.slideNext()}
        ></button>
        <button
          className="bg-green-500 rounded-full w-4 h-4 mr-4"
          onClick={() => swiper.slideNext()}
        ></button>
        <button
          className="bg-green-500 rounded-full w-4 h-4 mr-4"
          onClick={() => swiper.slideNext()}
        ></button>
        <button
          className="bg-green-500 rounded-full w-4 h-4 mr-4"
          onClick={() => swiper.slideNext()}
        ></button>
      </div>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        centeredSlidesBounds={true}
        slidesPerView={1}
        className="flex items-center justify-center"
        style={{ width: '50%' }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        pagination={{
          clickable: true,
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img
            src={Testi1}
            alt="icon-oval"
            loading="eager"
            className="object-contain"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Testi2}
            alt="icon-oval"
            loading="eager"
            className=" object-contain"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Testi3}
            alt="icon-oval"
            loading="eager"
            className=" object-contain"
          />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <img
            src={Testi4}
            alt="icon-oval"
            loading="eager"
            className=" object-contain"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MainSwiper;
