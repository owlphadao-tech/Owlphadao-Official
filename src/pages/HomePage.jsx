import Footer from '../components/Footer';
import HeroSection from '../components/home/hero';
import TrustBanner from '../components/home/TrustBanner';
import SolutionSection from '../components/home/Solutionsection';
import AboutPage from '../components/home/About';
import NftCollectionSection from '../components/home/NftCollectionSection';
import Contact from '../components/home/Contact';

const Home = () => {
  return (
    <div className="bg-[var(--color-dark)] min-h-screen">
      <HeroSection/>
      <TrustBanner/>
      <AboutPage/>
      <NftCollectionSection/>
      <SolutionSection/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Home;