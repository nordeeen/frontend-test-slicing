import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
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
import Texts from './components/Texts';
import MainTestimonials from './components/MainTestimonials';

function App() {
  useEffect(() => {
    AOS.init({ disable: 'mobile' });
    AOS.refresh();
  }, []);

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

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
      <MainTestimonials/>
      <MainMobile/>
      <Texts/>
      <Footer/>
    </div>
  );
}

export default App;
