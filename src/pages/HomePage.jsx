
import HeroSection from '../components/Sections/hero';
import TrustBanner from '../components/Sections/TrustBanner';
import AboutPage from '../components/Sections/About';
import NftCollectionSection from '../components/Sections/NftCollectionSection';
import Contact from '../components/Sections/Contact';
import Story from '../components/Sections/story';
import Footer from '../components/Footer';
import RolesSection from '../components/Sections/RolesSection';
import ProviderSection from '../components/Sections/ProviderSection';
import GuideSection from '../components/Sections/GuideSection';
import ConnectorSection from '../components/Sections/ConnectorSection';
import EcosystemSection from '../components/Sections/Ecosection';
import OwnershipPromiseSection from '../components/Sections/Ownership';
import StepsSection from '../components/Sections/ClearPath';
import CollectiblesSection from '../components/Sections/CollectiblesSection';
import PartnerSection from '../components/Sections/PartnerSection';
import FAQSection from '../components/Sections/FAQ';



const HomePage = () => {
  return (
    <div className="bg-[var(--color-dark)] min-h-screen">
      <HeroSection/>
      <TrustBanner/>
      <AboutPage/>
      <RolesSection/>
      <ProviderSection/>
      <GuideSection/>
      <ConnectorSection/>
      <EcosystemSection/>
      <OwnershipPromiseSection/>
      <StepsSection/>
      <CollectiblesSection/>
      <NftCollectionSection/>
       <Story/>
       <PartnerSection/>
       <FAQSection/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default HomePage;