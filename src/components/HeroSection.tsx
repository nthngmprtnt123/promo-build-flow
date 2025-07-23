import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Truck, Award } from "lucide-react";
import heroImage from "@/assets/hero-industrial.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            Professzionális ipari ragasztók, amikor a megbízhatóság az első
          </h1>
          
          <p className="font-open-sans text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            Prémium márkapartnerek (3M, Tesa, Loctite, Henkel) termékei az autóipar, 
            elektronikai gyártás és egyéb ipari alkalmazások számára.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="accent" size="lg" className="group">
              Termékek megtekintése
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20">
              Ajánlatot kérek
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-6 text-white/80">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5" />
              <span className="font-open-sans text-sm">25+ év tapasztalat</span>
            </div>
            <div className="flex items-center space-x-2">
              <Truck className="h-5 w-5" />
              <span className="font-open-sans text-sm">Gyors szállítás</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="h-5 w-5" />
              <span className="font-open-sans text-sm">Prémium márkák</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;