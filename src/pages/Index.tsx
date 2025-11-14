import { useState } from "react";
import { ChevronRight, Shuffle, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import PopularTags from "@/components/PopularTags";
import ProductCard from "@/components/ProductCard";
import BoutiqueCard from "@/components/BoutiqueCard";
import { Button } from "@/components/ui/button";
import { dummyProducts, dummyBoutiques, dummyYoutubers } from "@/data/assets";
import Hero from "../components/hero"

const Index = () => {
  const [productFilter, setProductFilter] = useState<'random' | 'new'>('random');

  const popularProducts = dummyProducts.filter(product => product.popular);
  const filteredProducts = productFilter === 'new'
    ? dummyProducts.filter(product => product.newProduct)
    : [...dummyProducts].sort(() => Math.random() - 0.5);

  const popularBoutiques = dummyBoutiques.filter(boutique => boutique.populare);
  const newBoutiques = [...dummyBoutiques].sort((a, b) =>
    new Date(b.creatDate).getTime() - new Date(a.creatDate).getTime()
  ).slice(0, 10);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <Hero/>

      {/* Popular Tags */}
      <PopularTags />

      {/* Popular Products */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Produits Populaires
            </h2>
            <p className="text-lg text-gray-600">
              Les Produits Les Plus Appréciés Par Notre Communauté
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:mx-20 gap-6">
            {popularProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Boutique Banner */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop')`
          }}
        >
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Create Your Own Boutique
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of creators selling their unique designs on Merchy
          </p>
          <Button className="btn-secondary text-lg px-8 py-4">
            Start Selling Today
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Explorez nos produits */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explorez Nos Produits
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Découvrez Toute Notre Gamme De Produits
            </p>
            <div className="flex justify-center space-x-4 mb-8">
              <Button
                variant={productFilter === 'random' ? 'default' : 'outline'}
                onClick={() => setProductFilter('random')}
                className={`px-6 py-2 rounded-full ${productFilter === 'random' ? 'bg-merchy-green text-white' : 'bg-white text-merchy-green border-merchy-green'}`}
              >
                Aléatoires
              </Button>
              <Button
                variant={productFilter === 'new' ? 'default' : 'outline'}
                onClick={() => setProductFilter('new')}
                className={`px-6 py-2 rounded-full ${productFilter === 'new' ? 'bg-merchy-green text-white' : 'bg-white text-merchy-green border-merchy-green'}`}
              >
                Nouveautés
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:mx-20 gap-6">
            {filteredProducts.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Boutiques */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Boutiques Populaires
            </h2>
            <p className="text-lg text-gray-600">
              Découvrez Notre Sélection De Boutiques De Qualité
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:mx-20 gap-6">
            {popularBoutiques.map((boutique) => (
              <BoutiqueCard key={boutique.id} boutique={boutique} color={'#22c55e'} />
            ))}
          </div>
        </div>
      </section>

      {/* YouTuber Section */}
      <section className="p-4 bg-red-600 m-2 mb-10 rounded-xl sm:mx-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4 bg-black/80 p-10 rounded-xl ">
            <img src="https://www.svgrepo.com/show/452138/youtube.svg"
              className="w-20 h-20  mx-auto mb-2" alt="" />
            <h2 className="text-xl md:text-4xl font-bold text-white mb-4">
              Votre YouTuber Préféré
            </h2>
            <p className="text-lg text-gray-200">
              Découvrez Les Boutiques De Vos Créateurs Préférés
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-6">
            {dummyYoutubers.map((youtuber) => (
              <BoutiqueCard key={youtuber.id} boutique={youtuber} color={'#dc2626'} />
            ))}
          </div>
        </div>
      </section>

      {/* New Boutiques */}
      <section className="p-4 bg-green-500 m-2 rounded-xl sm:mx-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4 bg-black/80 p-10 rounded-xl ">
            <img src="https://merchy.ma/images/merchy-store-placeholder.png"
              className="w-20 h-20  p-1 mx-auto mb-2 bg-white rounded-full" alt="" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
              Nouvelles Boutiques
            </h2>
            <p className="text-lg text-gray-200">
              Découvrez Nos Boutiques Récemment Ajoutées
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-6">
            {newBoutiques.map((boutique) => (
              <BoutiqueCard key={boutique.id} boutique={boutique} color={'#22c55e'} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;