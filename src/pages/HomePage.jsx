import React from 'react';
import Hero from '../components/home/hero';
import OwlphaStory from '../components/home/story';
import EcosystemStats from '../components/home/EcosystemStats';
import Assets from '../components/home/Asset';
import Roadmap from '../components/home/RoadMap';

import About from '../components/home/About';
import Ecosystem from '../components/home/Ecosystem';

import Contact from '../components/home/Contact';
import Footer from '../components/Footer';
import Community from '../components/home/Community';


const Home = () => {
  return (
    <div className="bg-[var(--color-dark)] min-h-screen">
      <Hero/>
   
      <OwlphaStory/>
      <About/>
      <Ecosystem/>
      <EcosystemStats/>
      <Community/>
      <Assets/>
      <Roadmap/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Home;