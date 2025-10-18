import { Link } from "react-router-dom";
import { Store, Package } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface BoutiqueCardProps {
  boutique: {
    id: number;
    name: string;
    creatDate: string;
    boutiqueProduct: number[];
    numberProduct: number;
    boutiqueImg: string;
    bgImage: string;
    populare: boolean;
  };
  color: string;
}

const BoutiqueCard = ({ boutique, color }: BoutiqueCardProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="card-product group overflow-hidden">
      <Link to={`/stores/${boutique.name.toLowerCase().replace(/\s+/g, '-')}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        {/* Background Image */}
        <div
          className="relative h-32 bg-cover bg-center rounded-lg mb-4"
          style={{ backgroundImage: `url(${boutique.bgImage})` }}
        >
          <div className="absolute inset-0 bg-black/40 rounded-lg"></div>

          {/* Boutique Logo */}
          <div className="absolute -bottom-6 left-4">
            <img
              src={boutique.boutiqueImg}
              alt={boutique.name}
              className="w-12 h-12 rounded-full border-4 border-white object-cover"
            />
          </div>

          {/* Popular Badge */}
          {boutique.populare && (
            <div className="absolute top-2 right-2">
              <Badge className={`bg-${color}-500 text-primary-foreground`}>Popular</Badge>
            </div>
          )}
        </div>

        <div className="pt-2 space-y-3">
          <div className="max-w-full">
            <h3 style={{color:color}} className={`font-semibold text-xs my-3 sm:text-sm   truncate`}>
              {boutique.name}
            </h3>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-muted-foreground">
              <Package className="h-4 w-4 mr-1" />
              {boutique.numberProduct} products
            </div>
            <div style={{color:color}} className={`flex items-center text-${color}-400 `}>
              <Store className="h-4 w-4 mr-1" />
              Store
            </div>
          </div>


          <button style={{background:color}} className={`w-full  p-2 rounded-lg text-white`}>
            Visit Store
          </button>

        </div>
      </Link>
    </div>
  );
};

export default BoutiqueCard;