import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Heart,
  Share2,
  ShoppingBag,
  Eye,
  Star,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { dummyProducts } from "@/data/assets";

const ProductPage = () => {
  const { id } = useParams();
  const product = dummyProducts.find((p) => p.id === parseInt(id || "0"));

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Link to="/" className="text-primary hover:underline">
            Return to homepage
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedProducts = dummyProducts
    .filter(
      (p) =>
        p.id !== product.id &&
        (p.category === product.category ||
          (p.tags && product.tags?.some((tag) => p.tags?.includes(tag))))
    )
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary">
            Home
          </Link>
          <span>/</span>
          <Link
            to={`/category/${product.category}`}
            className="hover:text-primary capitalize"
          >
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        {/* Back Button */}
        <Button variant="ghost" className="mb-6" asChild>
          <Link to="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to products
          </Link>
        </Button>

        <div className="grid grid-cols-1 sm:grid-cols-2 w-4/5 mx-auto lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden bg-accent/20">
              <img
                src={product.productImg}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6 ">
            <div>
              <div className="flex items-center gap-2 mb-2">
                {product.newProduct && (
                  <Badge className="bg-merchy-orange text-white">New</Badge>
                )}
                {product.popular && (
                  <Badge className="bg-primary text-primary-foreground">
                    Popular
                  </Badge>
                )}
              </div>

              <h1 className="text-xl font-bold text-foreground mb-2">
                {product.name}
              </h1>

              <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center">
                  <Eye className="h-4 w-4 mr-1" />
                  {product.consulterPar} views
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                  4.8 (125 reviews)
                </div>
              </div>

              <div className="text-xl font-bold text-primary mb-6">
                {product.price} MAD
              </div>
            </div>

            <Separator />

            {/* Product Info */}
            <div className="space-y-4 ">
              <div>
                <h3 className="font-semibold mb-2">Category</h3>
                <Badge variant="secondary" className="capitalize">
                  {product.category}
                </Badge>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Available Sizes</h3>
                <div className="flex flex-wrap gap-2">
                  {product.size.map((size) => (
                    <Button key={size} variant="outline" size="sm">
                      {size}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Available Colors</h3>
                <div className="flex space-x-2">
                  {product.colors?.map((color) => (
                    <span
                      key={color}
                      className="w-6 h-6 rounded-full border "
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Stock</h3>
                <span
                  className={`text-sm ${
                    product.quantity > 10
                      ? "text-green-600"
                      : "text-orange-600"
                  }`}
                >
                  {product.quantity > 10
                    ? "In Stock"
                    : `Only ${product.quantity} left`}
                </span>
              </div>
            </div>

            <Separator />

            {/* Actions */}
            <div className="space-y-4">
              <Button className="w-full btn-hero text-lg py-3">
                <ShoppingBag className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>

              <div className=" sm:flex space-x-1">
                <Button variant="outline" className="flex-1">
                  <Heart className="h-4 w-4 mr-2" />
                  Add to Wishlist
                </Button>
                <Button variant="outline" className="flex-1">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            {/* Product Description */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Description</h3>
              <p className="text-muted-foreground leading-relaxed">
                This premium {product.category} features high-quality materials
                and unique design. Perfect for{" "}
                {product.tags?.join(", ") || product.category} enthusiasts who
                appreciate style and comfort. Made with attention to detail and
                crafted to last.
              </p>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:mx-20 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ProductPage;
