import React from 'react';
import smallContent from '../assets/small-content.png';
import fakeImg from '../assets/fake-img.png';
import OvalBlue from '../assets/oval-blue.png';

const MainSwiper = () => {
  return (
    <div className="w-full h-auto bg-white px-6 flex justify-between items-center flex-col py-16">
      <img
        src={smallContent}
        alt="icon-content"
        className="w-[65px] h-[65px] object-contain"
      />
      <div className='w-[60%] mb-10'>
        <h4 className="text-5xl font-medium text-center text-black">
          Kelola Sampah dan Limbah dengan Mudah sebagai Mitra
        </h4>
      </div>
      <div className='w-[65%]'>
        <p className="text-3xl font-semibold text-center text-black">
          Mitra Pituku dapat melakukan pembaharuan stok, harga penjualan,
          kualitas sampah dan limbah secara real-time
        </p>
      </div>
      <div className='w-[60%] flex justify-start items-center'>
        <img src={OvalBlue} alt="icon-oval" className='w-[100px] h-[100px] object-contain' />
      </div>
        <img src={fakeImg} alt="img" className="w-[100%] h-auto object-contain py-8" />
    </div>
  );
}

export default MainSwiper