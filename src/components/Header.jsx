import React from 'react'
import logoHeader from '../assets/pituku-logo.png';
import setting from '../assets/setting.png';

const Header = () => {
  return (
    <header className="w-full h-auto bg-white px-9 py-6 flex justify-between items-center mb-10 sticky top-0 z-50">
      <div className="flex">
        <img
          src={logoHeader}
          alt="logo-header"
          loading='eager'
          className="w-[150px] h-auto object-contain mr-10"
        />
        <ul className="flex justify-between items-center space-x-10 text-2xl font-semibold text-black">
          <li className="px-8 py-3 bg-[#4CAF50] text-white rounded-2xl">
            <a href="">Beranda</a>
          </li>
          <li>
            <a href="">Katalog</a>
          </li>
          <li>
            <a href="">Social Commerce</a>
          </li>
          <li>
            <a href="">Kemitraaan</a>
          </li>
          <li>
            <a href="">Kontak</a>
          </li>
        </ul>
      </div>

      <div className="flex justify-between items-center space-x-5 uppercase text-xl font-semibold text-black">
        <a href="/#">Masuk</a>
        <a href="/#" className="px-8 py-3 bg-[#4CAF50] text-white rounded-xl">Daftar</a>
        <img src={setting} alt="icon-setting" loading='eager' className='w-[35px] h-[35px] object-contain' />
      </div>
    </header>
  );
}

export default Header