import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProductPage from "./pages/ProductPage";
import StorePage from "./pages/StorePage";
import TagPage from "./pages/TagPage";
import CategoryPage from "./pages/CategoryPage";
import CartPage from "./pages/CartPage";
import ContactPage from "./pages/ContactPage";
import SearchPage from "./pages/SearchPage";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import TermsAndConditions from "./pages/TermsAndConditions ";
import ShippingPolicy from "./pages/ShippingPolicy ";
import SellerTerms from "./pages/SellerTerms";
import PrivacyPolicy from "./pages/PrivacyPolicy ";
import ReturnPolicy from "./pages/ReturnPolicy";

import Login from "./pages/Login";
import Register from "./pages/Register";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/stores/:name" element={<StorePage />} />
          <Route path="/tags/:tagname" element={<TagPage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/shipping" element={<ShippingPolicy />} />
          <Route path="/seller-terms" element={<SellerTerms />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/returns" element={<ReturnPolicy />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
