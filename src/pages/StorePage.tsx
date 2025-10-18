import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Package, MapPin, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { dummyBoutiques, dummyYoutubers, dummyProducts } from "@/data/assets";

const StorePage = () => {
  const { name } = useParams();
  const storeName = name?.replace(/-/g, ' ');
  
  // Find boutique in both boutiques and YouTubers arrays
  const boutique = [...dummyBoutiques, ...dummyYoutubers]
    .find(b => b.name.toLowerCase() === storeName?.toLowerCase());
  
  // Check if this is a YouTuber
  const isYoutuber = dummyYoutubers.some(y => y.name.toLowerCase() === storeName?.toLowerCase());
  
  if (!boutique) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Store not found</h1>
          <Link to="/" className="text-primary hover:underline">
            Return to homepage
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Get store products - for YouTubers, filter by isYoutuber and youtuberId
  let storeProducts;
  if (isYoutuber) {
    const youtuberData = dummyYoutubers.find(y => y.name.toLowerCase() === storeName?.toLowerCase());
    storeProducts = dummyProducts.filter(product => 
      product.isYoutuber && product.youtuberId === youtuberData?.id
    );
  } else {
    storeProducts = dummyProducts.filter(product => 
      boutique.boutiqueProduct.includes(product.id)
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Button variant="ghost" className="mb-6" asChild>
          <Link to="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to stores
          </Link>
        </Button>

        {/* Store Hero Section */}
        <div className="relative rounded-2xl overflow-hidden mb-12">
          <div 
            className="h-64 bg-cover bg-center"
            style={{ backgroundImage: `url(${boutique.bgImage})` }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          {/* Store Info Overlay */}
          <div className="absolute bottom-6 left-6 flex items-end space-x-4">
            <img
              src={boutique.boutiqueImg}
              alt={boutique.name}
              className="w-20 h-20 rounded-2xl border-4 border-white object-cover"
            />
            <div className="text-white">
              <h1 className="text-3xl font-bold mb-2">{boutique.name}</h1>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  Created {formatDate(boutique.creatDate)}
                </div>
                <div className="flex items-center">
                  <Package className="h-4 w-4 mr-1" />
                  {boutique.numberProduct} products
                </div>
              </div>
            </div>
          </div>

          {/* Popular Badge */}
          {boutique.populare && (
            <div className="absolute top-6 right-6">
              <Badge className="bg-primary text-primary-foreground">
                {isYoutuber ? 'Popular YouTuber' : 'Popular Store'}
              </Badge>
            </div>
          )}
        </div>

        {/* Store Details */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-3">
            <div className="bg-card rounded-lg p-6 space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">About {boutique.name}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Welcome to {boutique.name}, a {isYoutuber ? 'talented YouTuber creating' : 'curated collection of'} unique and high-quality products. 
                  {isYoutuber ? "Follow their journey and get exclusive merchandise from your favorite content creator." : "We've been creating amazing designs and have built a community of satisfied customers who love our creative approach to fashion and lifestyle products."}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <div className="text-center p-4 bg-accent/20 rounded-lg">
                  <div className="text-2xl font-bold text-primary">{boutique.numberProduct}</div>
                  <div className="text-sm text-muted-foreground">Total Products</div>
                </div>
                <div className="text-center p-4 bg-accent/20 rounded-lg">
                  <div className="text-2xl font-bold text-primary">4.8</div>
                  <div className="text-sm text-muted-foreground">Average Rating</div>
                </div>
                <div className="text-center p-4 bg-accent/20 rounded-lg">
                  <div className="text-2xl font-bold text-primary">1.2k</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-card rounded-lg p-6">
              <h3 className="font-semibold mb-4">Store Information</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>Casablanca, Morocco</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>Joined {formatDate(boutique.creatDate)}</span>
                </div>
              </div>
            </div>

            <Button className="w-full btn-hero">
              <ExternalLink className="h-4 w-4 mr-2" />
              {isYoutuber ? 'Visit YouTube Channel' : 'Visit External Store'}
            </Button>
          </div>
        </div>

        {/* Store Products */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-foreground">
              {isYoutuber ? 'Products from this YouTuber' : `Products from ${boutique.name}`}
            </h2>
            <span className="text-muted-foreground">
              {storeProducts.length} products
            </span>
          </div>

          {storeProducts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:mx-20 gap-6">
              {storeProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No products yet</h3>
              <p className="text-muted-foreground">
                This store hasn't added any products yet. Check back later!
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default StorePage;