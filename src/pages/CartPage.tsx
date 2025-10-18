import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { dummyProducts } from "@/data/assets";

interface CartItem {
  id: number;
  quantity: number;
  size?: string;
}

const CartPage = () => {
  // Sample cart items - in real app this would come from context/state management
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, quantity: 2, size: "M" },
    { id: 2, quantity: 1, size: "L" },
    { id: 10, quantity: 1, size: "L" },
    { id: 11, quantity: 1, size: "L" },
    { id: 4, quantity: 1, size: "L" },
    { id: 8, quantity: 1, size: "L" },
  ]);

  const getCartProducts = () => {
    return cartItems.map(cartItem => ({
      ...dummyProducts.find(p => p.id === cartItem.id)!,
      quantity: cartItem.quantity,
      selectedSize: cartItem.size
    }));
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id);
      return;
    }
    setCartItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const cartProducts = getCartProducts();
  const total = cartProducts.reduce((sum, product) => sum + (product.price * product.quantity), 0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center gap-2 mb-8">
          <Link to="/">
            <Button variant="ghost" size="sm" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Continuer les achats
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Mon Panier</h1>
            <p className="text-muted-foreground">{cartItems.length} articles</p>
          </div>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground mb-4">
              Votre panier est vide
            </p>
            <Link to="/">
              <Button>Commencer vos achats</Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {cartProducts.map((product) => (
              <Card key={`${product.id}-${product.selectedSize}`} className="p-2">
                <div className="flex items-center gap-2">
                  <img
                    src={product.productImg}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  
                  <div className="flex-1">
                    <Link to={`/products/${product.id}`}>
                      <h3 className="font-semibold text-sm text-foreground hover:text-primary">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-muted-foreground text-sm">Taille: {product.selectedSize}</p>
                    <p className="font-semibold text-primary text-sm">{product.price} MAD</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(product.id, product.quantity - 1)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-12 text-center font-medium">{product.quantity}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(product.id, product.quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="text-right">
                    <p className="font-semibold text-lg">{product.price * product.quantity} MAD</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeItem(product.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}

            <Card className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Total</h3>
                  <p className="text-muted-foreground">TVA incluse</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-primary">{total} MAD</p>
                  <Button size="lg" className="mt-4">
                    Procéder au paiement
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default CartPage;