
import Roadmap from '../components/home/RoadMap';



import Footer from '../components/Footer';

import HeroSection from '../components/home/hero';
import TrustBanner from '../components/home/TrustBanner';
import SolutionSection from '../components/home/Solutionsection';
import EnginesSection from '../components/home/EnginesSection';
import ImpactMetrics from '../components/home/ImpactMetrics';
import CallToAction from '../components/home/CallToAction';
import AboutPage from '../components/home/About';
import NftCollectionSection from '../components/home/NftCollectionSection';


const Home = () => {
  return (
    <div className="bg-[var(--color-dark)] min-h-screen">
      <HeroSection/>
   
     <TrustBanner/>
     <AboutPage/>
     <NftCollectionSection/>
     <SolutionSection/>
     <EnginesSection/>
      <ImpactMetrics/>
      <Roadmap/>
      <CallToAction/>
      
      <Footer/>
    </div>
  );
};

export default Home;