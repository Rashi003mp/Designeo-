import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServiceGrid from "@/components/ServiceGrid";
import MarqueeSection from "@/components/MarqueeSection";
import PortfolioGallery from "@/components/PortfolioGallery";
import ProcessTimeline from "@/components/ProcessTimeline";
import QualitySection from "@/components/QualitySection";
import ContactHub from "@/components/ContactHub";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServiceGrid />
      <MarqueeSection />
      <PortfolioGallery />
      <ProcessTimeline />
      <QualitySection />
      <ContactHub />
      <Footer />
    </div>
  );
};

export default Index;
