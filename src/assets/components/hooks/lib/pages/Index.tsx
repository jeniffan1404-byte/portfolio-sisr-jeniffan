import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import BTSSection from '@/components/BTSSection';
import EpreuveE5Section from '@/components/EpreuveE5Section';
import EpreuveE6Section from '@/components/EpreuveE6Section';
import VeilleSection from '@/components/VeilleSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <BTSSection />
      <EpreuveE5Section />
      <EpreuveE6Section />
      <VeilleSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
