import { Button } from "@/components/ui/button";
import { Building2, Phone, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "#termekek", label: "Termékek" },
    { href: "#iparagak", label: "Iparágak" },
    { href: "#rolunk", label: "Rólunk" },
    { href: "#kapcsolat", label: "Kapcsolat" }
  ];

  return (
    <nav className="bg-white/98 backdrop-blur-md border-b border-border/50 sticky top-0 z-50 shadow-premium">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <Building2 className="h-7 w-7 lg:h-8 lg:w-8 text-primary transition-all duration-300 group-hover:scale-110 group-hover:text-primary-glow" />
              <div className="absolute inset-0 bg-primary/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100"></div>
            </div>
            <div>
              <h1 className="font-montserrat font-bold text-lg lg:text-xl text-foreground group-hover:text-primary transition-colors duration-300">QCBT</h1>
              <p className="text-xs text-muted-foreground font-open-sans hidden lg:block">Quality Consultant</p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative font-open-sans font-medium text-foreground hover:text-primary transition-all duration-300 group py-2"
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-500 ease-out"></div>
                <div className="absolute inset-0 bg-primary/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
              </a>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="flex items-center space-x-3 lg:space-x-6">
            <div className="hidden xl:flex items-center space-x-6 text-sm">
              <a 
                href="tel:+36123456789"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-all duration-300 group"
              >
                <Phone className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-open-sans font-medium">+36 1 234 5678</span>
              </a>
              <a 
                href="mailto:info@qcbt.hu"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-all duration-300 group"
              >
                <Mail className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-open-sans font-medium">info@qcbt.hu</span>
              </a>
            </div>
            
            <Button 
              variant="premium" 
              size="sm"
              className="relative overflow-hidden group active:scale-95 transition-transform duration-150"
            >
              <span className="relative z-10">Ajánlatot kérek</span>
              <div className="absolute inset-0 bg-gradient-to-r from-vibrant-red/80 to-vibrant-red scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors duration-300 group"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
              ) : (
                <Menu className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 border-t border-border/50">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 font-open-sans font-medium text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 rounded-lg mx-2 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="flex items-center justify-between">
                  {item.label}
                  <div className="w-0 h-0.5 bg-primary group-hover:w-6 transition-all duration-300"></div>
                </span>
              </a>
            ))}
            
            {/* Mobile Contact Info */}
            <div className="px-4 py-3 space-y-3 border-t border-border/30 mt-4">
              <a 
                href="tel:+36123456789"
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Phone className="h-4 w-4" />
                <span className="font-open-sans">+36 1 234 5678</span>
              </a>
              <a 
                href="mailto:info@qcbt.hu"
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Mail className="h-4 w-4" />
                <span className="font-open-sans">info@qcbt.hu</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;