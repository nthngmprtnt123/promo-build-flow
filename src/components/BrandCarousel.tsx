import { Card } from "@/components/ui/card";

const BrandCarousel = () => {
  const brands = [
    { name: "3M", logo: "3M", description: "Innovatív ipari megoldások" },
    { name: "Tesa", logo: "tesa", description: "Professzionális ragasztószalagok" },
    { name: "Loctite", logo: "LOCTITE", description: "Ipari ragasztók és tömítők" },
    { name: "Henkel", logo: "Henkel", description: "Megbízható ipari anyagok" },
  ];

  return (
    <section className="py-16 bg-muted/30" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-3xl text-foreground mb-4">
            Megbízható márkapartnereink
          </h2>
          <p className="font-open-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            A világ vezető ipari ragasztó és szalag gyártóinak hivatalos magyarországi képviselője
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {brands.map((brand, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-hover transition-all duration-300 group cursor-pointer bg-gradient-card">
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