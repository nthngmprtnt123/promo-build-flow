import { Building2, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Building2 className="h-8 w-8" />
              <div>
                <h3 className="font-montserrat font-bold text-xl">QCBT</h3>
                <p className="text-sm opacity-80">Quality Consultant Bt</p>
              </div>
            </div>
            
            <p className="font-open-sans text-sm opacity-90 leading-relaxed mb-6">
              Professzionális ipari ragasztó és szalag megoldások a világvezető 
              márkáktól. 25+ év tapasztalat az iparban.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4" />
                <span>+36 1 234 5678</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4" />
                <span>info@qcbt.hu</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4" />
                <span>1234 Budapest, Ipari út 12.</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Clock className="h-4 w-4" />
                <span>H-P: 8:00-17:00</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-6">Termékkategóriák</h4>
            <ul className="space-y-3 font-open-sans text-sm">
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Strukturális ragasztók</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">VHB szalagok</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Dupla oldalas szalagok</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Maszkolószalagok</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Hővezető megoldások</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Zajcsillapító szalagok</a></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-6">Iparágak</h4>
            <ul className="space-y-3 font-open-sans text-sm">
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Autóipar</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Elektronikai gyártás</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Bútorgyártás</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Felületkezelés</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Nyomdaipar</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Általános ipar</a></li>
            </ul>
          </div>

          {/* Quick Actions */}
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-6">Gyors elérés</h4>
            <div className="space-y-4">
              <Button variant="accent" size="sm" className="w-full">
                Ajánlatot kérek
              </Button>
              <Button variant="outline" size="sm" className="w-full bg-transparent border-white/30 text-white hover:bg-white/10">
                Termékkatálogus
              </Button>
              <Button variant="outline" size="sm" className="w-full bg-transparent border-white/30 text-white hover:bg-white/10">
                Kapcsolatfelvétel
              </Button>
            </div>

            <div className="mt-6">
              <p className="font-open-sans text-xs opacity-60 mb-2">Márkapartnerek:</p>
              <div className="flex flex-wrap gap-2 text-xs font-montserrat font-semibold">
                <span className="opacity-80">3M</span>
                <span className="opacity-60">•</span>
                <span className="opacity-80">Tesa</span>
                <span className="opacity-60">•</span>
                <span className="opacity-80">Loctite</span>
                <span className="opacity-60">•</span>
                <span className="opacity-80">Henkel</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm opacity-80">
          <p className="font-open-sans">
            © 2024 Quality Consultant Bt. Minden jog fenntartva.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:opacity-100 transition-opacity">Adatvédelem</a>
            <a href="#" className="hover:opacity-100 transition-opacity">ÁSZF</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Cookie-k</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;