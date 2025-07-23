import { Button } from "@/components/ui/button";
import { Building2, Phone, Mail } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Building2 className="h-8 w-8 text-primary" />
            <div>
              <h1 className="font-montserrat font-bold text-xl text-foreground">QCBT</h1>
              <p className="text-xs text-muted-foreground font-open-sans">Quality Consultant</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#termekek" className="font-open-sans text-foreground hover:text-primary transition-colors">
              Termékek
            </a>
            <a href="#iparagak" className="font-open-sans text-foreground hover:text-primary transition-colors">
              Iparágak
            </a>
            <a href="#rolunk" className="font-open-sans text-foreground hover:text-primary transition-colors">
              Rólunk
            </a>
            <a href="#kapcsolat" className="font-open-sans text-foreground hover:text-primary transition-colors">
              Kapcsolat
            </a>
          </div>

          {/* Contact Info & CTA */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span className="font-open-sans">+36 1 234 5678</span>
              </div>
              <div className="flex items-center space-x-1 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span className="font-open-sans">info@qcbt.hu</span>
              </div>
            </div>
            <Button variant="accent" size="sm">
              Ajánlatot kérek
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;