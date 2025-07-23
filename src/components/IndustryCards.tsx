import { Card, CardContent } from "@/components/ui/card";
import { Car, Cpu, Sofa, Wrench, Printer, Factory } from "lucide-react";

const IndustryCards = () => {
  const industries = [
    {
      title: "Autóipar",
      icon: Car,
      description: "VHB szalagok, strukturális ragasztók, zajcsillapító megoldások",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Elektronikai gyártás",
      icon: Cpu,
      description: "Hővezető szalagok, EMI árnyékolás, precíziós ragasztás",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Bútorgyártás",
      icon: Sofa,
      description: "Szövetragasztók, peremragasztók, szerelvényragasztók",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "Felületkezelés",
      icon: Wrench,
      description: "Maszkolószalagok, védőfóliák, festési megoldások",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      title: "Nyomdaipar",
      icon: Printer,
      description: "Dupla oldalas szalagok, címkeragasztók, rögzítők",
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      title: "Általános ipari",
      icon: Factory,
      description: "Univerzális ragasztók, karbantartási szalagok",
      color: "text-gray-600",
      bgColor: "bg-gray-50",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-3xl text-foreground mb-4">
            Szakosodott iparági megoldások
          </h2>
          <p className="font-open-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Minden iparág egyedi kihívásaira szabott, professzionális ragasztó és szalag megoldások
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-hover transition-all duration-300 cursor-pointer bg-gradient-card border-0 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className={`w-14 h-14 rounded-lg ${industry.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className={`h-7 w-7 ${industry.color}`} />
                  </div>
                  
                  <h3 className="font-montserrat font-semibold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                    {industry.title}
                  </h3>
                  
                  <p className="font-open-sans text-muted-foreground leading-relaxed">
                    {industry.description}
                  </p>

                  <div className="mt-4 flex items-center text-primary group-hover:text-accent transition-colors">
                    <span className="font-open-sans text-sm font-medium">Termékek megtekintése</span>
                    <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustryCards;