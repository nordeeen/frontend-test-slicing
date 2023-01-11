import React from 'react';
import Header from './components/Header';
import HeroContent from './components/HeroContent';
import Features from './components/Features';
import MainContent from './components/MainContent';
import MainPrice from './components/MainPrice';
import MainSolution from './components/MainSolution';
import MainSwiper from './components/MainSwiper';
import Footer from './components/Footer';
import MainSale from './components/MainSale';
import MainMobile from './components/MainMobile';

function App() {
  return (
    <div>
      <Header/>
      <HeroContent/>
      <Features/>
      <MainContent/>
      <MainPrice/>
      <MainSolution/>
      <MainSale/>
      <MainSwiper/>
      <MainMobile/>
      <Footer/>
    </div>
  );
}

export default App;
