import { Card } from "@/components/ui/card";

const BrandCarousel = () => {
  const brands = [
    { name: "3M", logo: "3M", description: "Innovatív ipari megoldások" },
    { name: "Tesa", logo: "tesa", description: "Professzionális ragasztószalagok" },
    { name: "Loctite", logo: "LOCTITE", description: "Ipari ragasztók és tömítők" },
    { name: "Henkel", logo: "Henkel", description: "Megbízható ipari anyagok" },
  ];

  return (
    <section className="py-12 lg:py-16 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="font-montserrat font-bold text-2xl lg:text-3xl text-foreground mb-3 lg:mb-4">
            Megbízható márkapartnereink
          </h2>
          <p className="font-open-sans text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4 lg:px-0">
            A világ vezető ipari ragasztó és szalag gyártóinak hivatalos magyarországi képviselője
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {brands.map((brand, index) => (
            <Card key={index} className="p-4 lg:p-6 text-center hover:shadow-hover transition-all duration-300 group cursor-pointer bg-gradient-card">
              <div className="mb-4">
                <div className="h-16 flex items-center justify-center">
                  <span className="font-montserrat font-bold text-3xl text-primary group-hover:text-accent transition-colors">
                    {brand.logo}
                  </span>
                </div>
              </div>
              <h3 className="font-montserrat font-semibold text-foreground mb-2">
                {brand.name}
              </h3>
              <p className="font-open-sans text-sm text-muted-foreground">
                {brand.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Animated background elements */}
        <div className="relative mt-8 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="animate-pulse bg-gradient-industrial h-2 w-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandCarousel;