import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ProductPreview = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "3M VHB 4910",
      category: "Strukturális ragasztó",
      brand: "3M",
      description: "Kiváló tapadás fémekhez, műanyagokhoz. Időjárásálló, UV-stabil.",
      applications: ["Autóipar", "Építőipar"],
      image: "/api/placeholder/300/200",
    },
    {
      id: 2,
      name: "Tesa 4965 Ultra Strong",
      category: "Dupla oldalas szalag",
      brand: "Tesa",
      description: "Rendkívül erős tapadás nehéz alkalmazásokhoz.",
      applications: ["Elektronika", "Ipar"],
      image: "/api/placeholder/300/200",
    },
    {
      id: 3,
      name: "Loctite 3090",
      category: "Pillanatragasztó",
      brand: "Loctite",
      description: "Gyors kötés, kiváló szakítószilárdság.",
      applications: ["Általános", "Javítás"],
      image: "/api/placeholder/300/200",
    },
    {
      id: 4,
      name: "Henkel Thermobond",
      category: "Hőveszető ragasztó",
      brand: "Henkel",
      description: "Kiváló hővezetés elektronikai alkalmazásokhoz.",
      applications: ["Elektronika", "LED"],
      image: "/api/placeholder/300/200",
    },
    {
      id: 5,
      name: "3M 2080 Masking",
      category: "Maszkolószalag",
      brand: "3M",
      description: "Precíz festési munkákhoz, könnyű eltávolítás.",
      applications: ["Festés", "Nyomda"],
      image: "/api/placeholder/300/200",
    },
    {
      id: 6,
      name: "Tesa ACXplus",
      category: "Szerelőszalag",
      brand: "Tesa",
      description: "Professzionális szerelési alkalmazásokhoz.",
      applications: ["Építőipar", "Bútor"],
      image: "/api/placeholder/300/200",
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-3xl text-foreground mb-4">
            Kiemelt termékek
          </h2>
          <p className="font-open-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Legkeresettebb ipari ragasztó és szalag megoldások raktárról
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-hover transition-all duration-300 bg-gradient-card border-0 overflow-hidden">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-montserrat font-bold text-2xl text-primary mb-2">
                      {product.brand}
                    </div>
                    <div className="font-open-sans text-sm text-muted-foreground">
                      {product.category}
                    </div>
                  </div>
                </div>
                <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
                  {product.brand}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-montserrat font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                
                <p className="font-open-sans text-sm text-muted-foreground mb-4 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {product.applications.map((app, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {app}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    Részletek
                  </Button>
                  <Button variant="accent" size="sm">
                    Ajánlat
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="industrial" size="lg">
            Összes termék megtekintése
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductPreview;