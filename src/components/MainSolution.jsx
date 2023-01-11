import React from 'react';
import smallContent from '../assets/small-content.png';
import solutionContent from '../assets/feature2.png';

const MainSolution = () => {
  return (
    <div className="w-full h-auto bg-white px-6 py-8 flex justify-around items-center mt-16">
      <div className="px-8">
        <img
          src={solutionContent}
          alt="solution-content"
          className="w-[700px] h-auto object-cover"
        />
      </div>
      <div className="flex flex-col justify-between items-start py-6">
        <img
          src={smallContent}
          alt="icon-content"
          className="w-[65px] h-[65px] object-contain"
        />
        <div className="w-[600px]">
          <h4 className="text-5xl text-black font-semibold text-left leading-relaxed">
            Solusi pembayaran sampai dengan 3 bulan
          </h4>
        </div>
        <div className="w-[650px] px-3 py-6">
          <p className="text-3xl text-black font-normal text-left">
            Pembeli sampah dan limbah di Pituku dapat mengajukan pembayaran
            tempo sampai tiga bulan dengan mudah
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainSolution;
