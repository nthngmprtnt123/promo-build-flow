import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import BrandCarousel from "@/components/BrandCarousel";
import IndustryCards from "@/components/IndustryCards";
import ProductPreview from "@/components/ProductPreview";
import QuoteFlow from "@/components/QuoteFlow";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-open-sans">
      <Navigation />
      <HeroSection />
      <BrandCarousel />
      <IndustryCards />
      <ProductPreview />
      <QuoteFlow />
      <Footer />
    </div>
  );
};

export default Index;
