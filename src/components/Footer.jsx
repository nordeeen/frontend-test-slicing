import React from 'react';
import logoFooter from '../assets/pituku-logo.png';
import fb from '../assets/facebook.png';
import ig from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';
import twitter from '../assets/twitter.png';

const medsos = [
  {
    id: 1,
    logo: fb,
    alt: 'logo-fb',
  },
  {
    id: 2,
    logo: twitter,
    alt: 'logo-twitter',
  },
  {
    id: 3,
    logo: ig,
    alt: 'logo-ig',
  },
  {
    id: 4,
    logo: linkedin,
    alt: 'logo-linkedin',
  },
];

const Footer = () => {
  return (
    <div className="w-full h-auto bg-[#FADA9D] px-6 py-16 flex">
      <div className="w-auto h-auto px-8 flex flex-col items-start">
        <img
          src={logoFooter}
          alt="logo-footer"
          loading='eager'
          className="w-[100px] h-auto object-contain"
        />
        <div className="w-[350px] mb-6">
          <p className="text-lg text-gray-800 fonts-normal text-left">
            Pituku adalah platform jual beli sampah dan limbah berkualitas,
            terpercaya, dan terbesar di Indonesia. Temukan kebutuhanmu, nikmati
            kemudahan transaksi, dan raih keuntungan dengan bergabung menjadi
            mitra. Jual beli sampah di #PitukuAja yuk!
          </p>
        </div>
        <p>©&nbsp; Pituku 2020</p>
      </div>
      <div className="flex justify-around items-start">
        <div className="w-[300px] h-auto">
          <h2 className="text-3xl font-semibold text-[#2E7D32] mb-6">
            Perusahaan
          </h2>
          <p className="text-lg font-medium text-left text-gray-800">
            Tentang Kami
          </p>
        </div>
        <div className="w-[300px] h-auto">
          <h2 className="text-2xl font-semibold text-[#2E7D32] mb-6">
            Resources
          </h2>
          <p className="text-lg font-medium text-left text-gray-800 mb-4">
            FAQ
          </p>
          <p className="text-lg font-medium text-left text-gray-800">
            Get Started
          </p>
        </div>
        <div className="w-[300px] h-auto">
          <h2 className="text-2xl font-semibold text-[#2E7D32] mb-6">Legal</h2>
          <p className="text-lg font-medium text-left text-gray-800 mb-4">
            Privacy policy
          </p>
          <p className="text-lg font-medium text-left text-gray-800">
            Terms of use
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <ul className="flex justify-between space-x-4">
          {medsos.map((val) => {
            return (
              <li key={val.id} className="px-3 py-3 rounded-full bg-gray-300">
                <a href="/#">
                  <img
                    src={val.logo}
                    alt={val.alt}
                    loading="eager"
                    className="w-[24px] h-[24px] object-contain"
                  />
                </a>
              </li>
            );
          })}
        </ul>
        <select
          name="lang"
          id="lang-select"
          className="w-[200px] h-[40px] bg-[#4CAF50] mt-6"
        >
          <option value="" className="">
            English
          </option>
        </select>
      </div>
    </div>
  );
};

export default Footer;
