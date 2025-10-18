import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, PhoneIcon } from "lucide-react";
import logo from "@/assets/merchy-logo.png";

const Footer = () => {
  const productLinks = [
    { name: "T-shirts", path: "/category/t-shirt" },
    { name: "Sweatshirt", path: "/category/sweatshirt" },
    { name: "Hoodie", path: "/category/hoodie" },
    { name: "Cap", path: "/category/cap" },
    { name: "Accessories", path: "/category/accessories" }
  ];

  const usefulLinks = [
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "FAQ", path: "/faq" },
    { name: "Shipping Info", path: "/shipping" },
    { name: "Returns", path: "/returns" }
  ];

  const informationLinks = [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Cookie Policy", path: "/cookies" },
    { name: "Seller Terms", path: "/seller-terms" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/100084978443582", name: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/merchy.ma", name: "Instagram" },
    { icon: PhoneIcon , href: "https://wa.me/+212652624996?text=Salut+Merchy%2C", name: "Instagram" },
  ];

  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            to="/" className="flex items-center space-x-2">
              <img src={logo} alt="Merchy" className="w-8 h-8" />
              <span className="text-xl font-bold text-foreground">Merchy</span>
            </Link>
            
            <p className="text-muted-foreground text-sm leading-relaxed">
              Merchy combines modernity and tradition, for creations that leave their mark. 
              Discover unique products from talented creators and boutiques.
            </p>

            

            {/* Social Media Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.name}
                >
                <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            
          </div>

          {/* Products Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Produits</h3>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Liens Utiles</h3>
            <ul className="space-y-2">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          

          {/* Information Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Information</h3>
            <ul className="space-y-2">
              {informationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            {/* Contact Info */}
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                +212 652 624 996
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                contact@merchy.ma
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Casablanca, Morocco
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2024 Merchy.ma. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6 text-sm">
            <Link 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            to="/sell" className="text-primary hover:text-primary-dark font-medium">
              Sell on Merchy
            </Link>
            <span className="text-muted-foreground">•</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;