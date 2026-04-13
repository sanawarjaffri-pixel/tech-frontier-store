import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";

const ITEMS_PER_PAGE = 12;

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "";
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...products];
    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory);
    }
    switch (sortBy) {
      case "price-asc": result.sort((a, b) => a.price - b.price); break;
      case "price-desc": result.sort((a, b) => b.price - a.price); break;
      case "name": result.sort((a, b) => a.title.localeCompare(b.title)); break;
    }
    return result;
  }, [activeCategory, sortBy]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleCategoryChange = (cat: string) => {
    if (cat) {
      setSearchParams({ category: cat });
    } else {
      setSearchParams({});
    }
    setCurrentPage(1);
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-8 md:px-8">
      {/* Breadcrumb */}
      <div className="mb-6 text-sm text-muted-foreground">
        Home / <span className="text-foreground">Shop</span>
        {activeCategory && <> / <span className="text-foreground">{activeCategory}</span></>}
      </div>

      <div className="flex gap-8">
        {/* Sidebar filters */}
        <aside className={`w-64 shrink-0 ${showFilters ? "block" : "hidden"} lg:block`}>
          <div className="rounded-lg border border-border bg-card p-4">
            <h3 className="mb-4 text-sm font-semibold text-foreground">Categories</h3>
            <ul className="space-y-1">
              <li>
                <button
                  onClick={() => handleCategoryChange("")}
                  className={`w-full rounded-md px-3 py-2 text-left text-sm transition-colors ${
                    !activeCategory ? "bg-primary/10 font-medium text-primary" : "text-muted-foreground hover:bg-secondary"
                  }`}
                >
                  All Products
                </button>
              </li>
              {categories.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => handleCategoryChange(cat.name)}
                    className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm transition-colors ${
                      activeCategory === cat.name
                        ? "bg-primary/10 font-medium text-primary"
                        : "text-muted-foreground hover:bg-secondary"
                    }`}
                  >
                    {cat.name}
                    <span className="text-xs text-muted-foreground">({cat.productCount})</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Products */}
        <div className="min-w-0 flex-1">
          {/* Toolbar */}
          <div className="mb-6 flex items-center justify-between rounded-lg border border-border bg-card px-4 py-3">
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal className="mr-1 h-4 w-4" />
                Filters
              </Button>
              <span className="text-sm text-muted-foreground">
                {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="hidden text-sm text-muted-foreground sm:inline">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="h-9 rounded-md border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="default">Default</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name">Name</option>
              </select>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {paginatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {paginatedProducts.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-lg text-muted-foreground">No products found in this category.</p>
              <Button className="mt-4" onClick={() => handleCategoryChange("")}>
                View All Products
              </Button>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-8 flex items-center justify-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <Button
                  key={i}
                  variant={currentPage === i + 1 ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
