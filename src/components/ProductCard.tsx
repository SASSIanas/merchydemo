import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Flame, Star } from "lucide-react";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    productImg: string;
    size: string[];
    popular: boolean;
    newProduct: boolean;
    consulterPar: number;
    category: string;
    colors?: string[];
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/products/${product.id}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <div className={`bg-white rounded-lg w-1/1 mx-auto shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden group`}
      
      >
        <div className="relative">
          {/* Product Image */}
          <div className="aspect-square overflow-hidden bg-gray-100">
            <img
              src={product.productImg}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            
          </div>

          {/* Badges */}
          <div className="absolute top-0 right-0 flex  space-x-1 m-1">

                        {product.popular && (

              <div className="p-1 bg-rose-600 rounded-full">
              <div className="bg-rose-600 rounded-full  border-white">
                <Flame className="text-white w-5 h-5"/>
              </div>
              </div>

            )}
            
          </div>
          <div className="absolute top-0 right-0 flex flex-col space-y-1">

          </div>
        </div>

        {/* Product Details */}
        <div className="p-4">
          {/* Colors */}
          <div className=" my-3 rounded-full py-1">
          <p className="truncate font-semibold text-xs sm:text-sm text-green-600 ">
            
          {product.name}
          </p>
          </div>
          {product.colors && product.colors.length > 0 && (
            <div className="flex space-x-1 mb-3">
              {product.colors.slice(0, 4).map((color) => (
                <span
                  key={color}
                  className="w-4 h-4 rounded-full border border-gray-400"
                  style={{ backgroundColor: color }}
                />
              ))}
              {product.colors.length > 4 && (
                <span className="text-xs text-gray-400">
                  +{product.colors.length - 4}
                </span>
              )}
            </div>
          )}

          {/* Sizes */}
          {product.size && product.size.length > 0 && (
            <div className="flex space-x-2 mb-3">
              {product.size.slice(0, 3).map((s) => (
                <span
                  key={s}
                  className="text-xs px-2 py-1 border border-gray-300 rounded"
                >
                  {s}
                </span>
              ))}
              {product.size.length > 3 && (
                <span className="text-xs px-2 py-1 border border-gray-300 rounded text-gray-500">
                  +{product.size.length - 3}
                </span>
              )}
            </div>
          )}


          {/* Star Rating */}
          <div className="flex items-center mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-4 w-4 ${star <= 4
                  ? "fill-merchy-green text-merchy-green"
                  : "text-gray-300"
                  }`}
              />
            ))}
          </div>

          {/* Price and Buy Button */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-gray-900">
              {product.price} MAD
            </span>
            {
              product.newProduct &&
              <p className="bg-green-400 p-1 text-xs text-white px-2 rounded-md">new</p>
            } 
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
