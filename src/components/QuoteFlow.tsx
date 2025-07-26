import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Package, FileText, ShoppingCart } from "lucide-react";

const QuoteFlow = () => {
  const steps = [
    {
      number: 1,
      title: "Iparág kiválasztása",
      description: "Válassza ki az iparágát és alkalmazási területet",
      icon: Search,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      number: 2,
      title: "Termék kiválasztása",
      description: "Böngésszen a szűrt terméklistában vagy kérjen segítséget",
      icon: Package,
      color: "text-green-500",
      bgColor: "bg-green-50",
    },
    {
      number: 3,
      title: "Egyedi ajánlatkérés",
      description: "Töltse ki az űrlapot a pontos specifikációkkal",
      icon: FileText,
      color: "text-orange-500",
      bgColor: "bg-orange-50",
    },
    {
      number: 4,
      title: "Megrendelés & fizetés",
      description: "Elfogadás után gyors szállítás és rugalmas fizetés",
      icon: ShoppingCart,
      color: "text-red-500",
      bgColor: "bg-red-50",
    },
  ];

  return (
    <section className="py-16 bg-background" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-3xl text-foreground mb-4">
            Egyszerű ajánlatkérési folyamat
          </h2>
          <p className="font-open-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            4 lépésben a megfelelő ipari ragasztó megoldáshoz
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={index} className="relative">
                    {/* Timeline Node */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>
                    
                    <Card className="bg-gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-300 pt-12">
                      <CardContent className="text-center p-6">
                        <div className={`w-16 h-16 rounded-full ${step.bgColor} flex items-center justify-center mx-auto mb-4`}>
                          <IconComponent className={`h-8 w-8 ${step.color}`} />
                        </div>
                        
                        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-montserrat font-bold text-sm mx-auto mb-4">
                          {step.number}
                        </div>
                        
                        <h3 className="font-montserrat font-semibold text-lg text-foreground mb-3">
                          {step.title}
                        </h3>
                        
                        <p className="font-open-sans text-sm text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-6">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card key={index} className="bg-gradient-card border-0 shadow-card">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-full ${step.bgColor} flex items-center justify-center flex-shrink-0`}>
                    <IconComponent className={`h-6 w-6 ${step.color}`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center font-montserrat font-bold text-xs mr-3">
                        {step.number}
                      </div>
                      <h3 className="font-montserrat font-semibold text-lg text-foreground">
                        {step.title}
                      </h3>
                    </div>
                    
                    <p className="font-open-sans text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="accent" size="lg">
            Ajánlatkérés indítása
          </Button>
        </div>
      </div>
    </section>
  );
};

export default QuoteFlow;