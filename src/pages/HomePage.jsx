
import HeroSection from '../components/Sections/hero';
import TrustBanner from '../components/Sections/TrustBanner';
import AboutPage from '../components/Sections/About';
import NftCollectionSection from '../components/Sections/NftCollectionSection';
import Contact from '../components/Sections/Contact';
import Story from '../components/Sections/story';
import Footer from '../components/Footer';



const Home = () => {
  return (
    <div className="bg-[var(--color-dark)] min-h-screen">
      <HeroSection/>
      <TrustBanner/>
      <AboutPage/>
      <NftCollectionSection/>
       <Story/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Home;