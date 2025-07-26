import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Truck, Award } from "lucide-react";
import heroImage from "@/assets/hero-industrial.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="max-w-4xl mx-auto lg:mx-0">
          <div className="text-center lg:text-left space-y-6 lg:space-y-8">
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-montserrat font-bold text-white leading-tight">
              <span className="block">Professzionális</span>
              <span className="block">ipari ragasztók,</span>
              <span className="block">amikor a</span>
              <span className="block text-accent-blue">megbízhatóság</span>
              <span className="block">az első</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-white/90 font-open-sans max-w-2xl mx-auto lg:mx-0 leading-relaxed px-2 lg:px-0">
              Prémium márkapartnerek (3M, Tesa, Loctite, Henkel) termékei az 
              autóipar, elektronikai gyártás és egyéb ipari alkalmazások számára.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start px-2 lg:px-0">
              <Button 
                variant="premium" 
                size="lg"
                className="w-full sm:w-auto text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Termékek megtekintése
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="w-full sm:w-auto text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50 backdrop-blur-sm"
              >
                Ajánlatot kérek
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-8 pt-4 lg:pt-8 px-2 lg:px-0">
              <div className="flex items-center gap-2 text-white/90">
                <Shield className="h-4 w-4 lg:h-5 lg:w-5 text-accent-blue" />
                <span className="font-open-sans text-sm lg:text-base font-medium">25+ év tapasztalat</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Truck className="h-4 w-4 lg:h-5 lg:w-5 text-accent-blue" />
                <span className="font-open-sans text-sm lg:text-base font-medium">Gyors szállítás</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Award className="h-4 w-4 lg:h-5 lg:w-5 text-accent-blue" />
                <span className="font-open-sans text-sm lg:text-base font-medium">Prémium márkák</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:block">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;