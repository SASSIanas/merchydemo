import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { dummyProducts, tagsData } from "@/data/assets";

const PopularTags = () => {
  const [showAll, setShowAll] = useState(false);

  // Count tags from products and attach emoji
  const popularTags = useMemo(() => {
    const tagCounts: Record<string, number> = {};

    dummyProducts.forEach(product => {
      (product.tags || []).forEach(tagName => {
        tagCounts[tagName] = (tagCounts[tagName] || 0) + 1;
      });
    });

    return Object.entries(tagCounts)
      .map(([name, count]) => {
        const tagInfo = tagsData.find(t => t.name === name);
        return {
          name,
          count,
          emoji: tagInfo ? tagInfo.imgTag : "🏷️" // fallback emoji
        };
      })
      .sort((a, b) => b.count - a.count);
  }, []);

  const displayTags = showAll ? popularTags : popularTags.slice(0, 9);

  return (
    <section className="sm:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Popular tags
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the most trending categories and find exactly what you're looking for
          </p>
        </div>

        <div className="grid grid-cols-3 sm:flex sm:flex-wrap gap-3 justify-center mb-8">
          {displayTags.map(tag => (
            <Link
              key={tag.name}
              to={`/tags/${tag.name}`}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="tag-pill inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-200 border border-gray-200 dark:border-gray-700 hover:border-primary"
            >
              {/* <div className="overflow-hidden flex justify-center bg-white items-center w-8 h-8 border rounded-full shadow-md">
              <img src={tag.emoji} alt="" className="w-8 h-8"/>
              </div> */}
              <span className="">{tag.emoji}</span>
              <span className="text-sm font-medium">{tag.name}</span>
            </Link>
          ))}
        </div>

        {!showAll && popularTags.length > 10 && (
          <div className="text-center">
            <Button
              variant="outline"
              onClick={() => setShowAll(true)}
              className="hover:bg-primary hover:text-primary-foreground rounded-full"
            >
              More tags
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PopularTags;
