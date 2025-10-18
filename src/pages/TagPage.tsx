import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Tag, Filter } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { dummyProducts,tagsData } from "@/data/assets";
import { useMemo } from "react";

const TagPage = () => {
  const { tagname } = useParams();

  // 🟢 فلترة المنتجات حسب الـ tag (يدعم tags: [] و tag: "")
  const tagProducts = dummyProducts.filter((product) => {
    let productTags: string[] = [];

    if (product.tags && Array.isArray(product.tags)) {
      productTags = product.tags;
    } else if (product.tag) {
      productTags = [product.tag];
    }

    return productTags.includes(tagname || "") || product.category === tagname;
  });

  // 🟢 حساب عدد المنتجات لكل tag (باش related tags يبان صحاح)
  const popularTags = useMemo(() => {
    const tagCounts: Record<string, number> = {};

    dummyProducts.forEach((product) => {
      let productTags: string[] = [];

      if (product.tags && Array.isArray(product.tags)) {
        productTags = product.tags;
      } else if (product.tag) {
        productTags = [product.tag];
      }

      productTags.forEach((t) => {
        tagCounts[t] = (tagCounts[t] || 0) + 1;
      });
    });

    return Object.entries(tagCounts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);
  }, []);

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
          <Link to="/#tags" className="hover:text-primary">
            Tags
          </Link>
          <span>/</span>
          <span className="text-foreground capitalize">{tagname}</span>
        </div>

        {/* Back Button */}
        <Button variant="ghost" className="mb-6" asChild>
          <Link to="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to homepage
          </Link>
        </Button>

        {/* Tag Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Tag className="h-4 w-4 text-primary mr-3" />
            <h1 className="text-xl flex gap-2 font-bold text-foreground capitalize">
              {tagname?.replace(/-/g, " ")} <div className=" text-merchy-green">
                              {tagProducts.length} products

              </div>
            </h1>
          </div>



          <p className="text-xs text-muted-foreground max-w-2xl mx-auto">
            Discover all products related to "{tagname?.replace(/-/g, " ")}"
            from various creators and boutiques
          </p>
        </div>

        {/* Filters */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              Showing {tagProducts.length} results for "{tagname}"
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              Price: Low to High
            </Button>
            <Button variant="outline" size="sm">
              Newest First
            </Button>
          </div>
        </div>

        {/* Products Grid */}
        {tagProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:mx-20 gap-6">
            {tagProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Tag className="h-16 w-16 text-muted-foreground mx-auto mb-6" 
            />
            <h2 className="text-2xl font-bold text-foreground mb-4">
              No products found
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              We couldn't find any products for the tag "{tagname}". Try
              exploring other popular tags or browse all products.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <Button asChild>
                <Link to="/">Browse All Products</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/#tags">View Popular Tags</Link>
              </Button>
            </div>
          </div>
        )}

        {/* Related Tags */}
        {tagProducts.length > 0 && (
  <div className="mt-16">
    <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
      Related tags
    </h2>
    <div className="flex flex-wrap gap-3 justify-center">
      {popularTags
        .filter((t) => t.name !== tagname)
        .slice(0, 8)
        .map((relatedTag) => {
          const tagInfo = tagsData.find(tag => tag.name === relatedTag.name);
          const emoji = tagInfo ? tagInfo.imgTag : "🏷️"; // fallback emoji
          return (
            <Link
              key={relatedTag.name}
              to={`/tags/${relatedTag.name}`}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="tag-pill inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-200 border border-gray-200 dark:border-gray-700 hover:border-primary"
            >
              <span className="mr-2">{emoji}</span>
              <span className="text-sm font-medium">{relatedTag.name}</span>
              
            </Link>
          );
        })}
    </div>
  </div>
)}
      </div>

      <Footer />
    </div>
  );
};

export default TagPage;
