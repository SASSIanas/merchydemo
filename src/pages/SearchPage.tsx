import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Search } from "lucide-react";
import ProductCard from "../components/ProductCard";
import BoutiqueCard from "../components/BoutiqueCard";
import { dummyProducts, dummyBoutiques, tagsData } from "@/data/assets";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [searchQuery, setSearchQuery] = useState(query);
  const [activeTab, setActiveTab] = useState("all");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchParams({ q: searchQuery });
    }
  };

  // Filter products based on search query
  const filteredProducts = dummyProducts.filter((product) => {
    const lowerQuery = query.toLowerCase();
    return (
      product.name.toLowerCase().includes(lowerQuery) ||
      product.category.toLowerCase().includes(lowerQuery) ||
      (product.tags &&
        product.tags.some((tag) => tag.toLowerCase().includes(lowerQuery)))
    );
  });

  // Filter boutiques based on search query
  const filteredBoutiques = dummyBoutiques.filter((boutique) =>
    boutique.name.toLowerCase().includes(query.toLowerCase())
  );

  // Filter tags based on search query
  const filteredTags = tagsData.filter((tag) =>
    tag.name.toLowerCase().includes(query.toLowerCase())
  );

  const totalResults =
    filteredProducts.length +
    filteredBoutiques.length +
    filteredTags.length;

  useEffect(() => {
    setSearchQuery(query);
  }, [query]);

  return (
    <>
      <Navbar/>
      <div className="min-h-screen bg-background py-8">
        <div className="max-w-7xl mx-auto px-4">
          {/* Search Header */}
          <div className="mb-8">
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto relative">
              <Input
                type="text"
                placeholder="Search for products, stores, tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-12 h-12 text-lg rounded-full"
              />
              <Button
                type="submit"
                size="sm"
                className="absolute right-2 top-2 h-8 w-8 p-0 rounded-full"
              >
                <Search className="h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* Results Info */}
          <div className="mb-6">
            <h1 className="text-xl text-foreground mb-2">
              {query ? `Search results for "${query}"` : "Search"}
            </h1>
            {query && (
              <p className="text-muted-foreground">
                Found {totalResults} results
              </p>
            )}
          </div>

          {/* Filter Tabs */}
          <div className="flex space-x-1 mb-8 bg-muted p-1 rounded-lg w-fit">
            {[
              { id: "all", label: "All", count: totalResults },
              { id: "products", label: "Products", count: filteredProducts.length },
              { id: "stores", label: "Stores", count: filteredBoutiques.length },
              { id: "tags", label: "Tags", count: filteredTags.length },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>

          {query && (
            <>
              {/* Products Section */}
              {(activeTab === "all" || activeTab === "products") &&
                filteredProducts.length > 0 && (
                  <div className="mb-12">
                    <h2 className="text-xl font-semibold text-foreground mb-4">
                      Products
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:mx-20 gap-6">
                      {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                  </div>
                )}

              {/* Stores Section */}
              {(activeTab === "all" || activeTab === "stores") &&
                filteredBoutiques.length > 0 && (
                  <div className="mb-12">
                    <h2 className="text-xl font-semibold text-foreground mb-4">
                      Stores
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:mx-20 gap-6">
                      {filteredBoutiques.map((boutique) => (
                        <BoutiqueCard key={boutique.id} boutique={boutique} />
                      ))}
                    </div>
                  </div>
                )}

              {/* Tags Section - Même design que TagPage */}
              {(activeTab === "all" || activeTab === "tags") &&
                filteredTags.length > 0 && (
                  <div className="mb-12">
                    <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                      Tags
                    </h2>
                    <div className="grid grid-cols-3 sm:flex sm:flex-wrap gap-3 justify-center mb-8">
                      {filteredTags.map((tag) => (
                        <Link
                          key={tag.id}
                          to={`/tags/${tag.name}`}
                          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                          className="tag-pill inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-200 border border-gray-200 dark:border-gray-700 hover:border-primary"
                        >
                          <span className="">{tag.imgTag}</span>
                          <span className="text-sm font-medium">
                            {tag.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

              {/* No Results */}
              {totalResults === 0 && (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    No results found
                  </h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search terms or browse our categories.
                  </p>
                </div>
              )}
            </>
          )}

          {/* Empty State */}
          {!query && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Start searching
              </h3>
              <p className="text-muted-foreground">
                Enter a search term to find products, stores, or tags.
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default SearchPage;