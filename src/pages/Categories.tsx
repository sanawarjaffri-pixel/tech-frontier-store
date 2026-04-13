import { Link } from "react-router-dom";
import { categories } from "@/data/products";
import { ArrowRight } from "lucide-react";

const CategoriesPage = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 py-8 md:px-8">
      <div className="mb-6 text-sm text-muted-foreground">
        Home / <span className="text-foreground">Categories</span>
      </div>
      <h1 className="mb-2 text-3xl font-bold text-foreground">All Categories</h1>
      <p className="mb-10 text-muted-foreground">Browse our complete range of IT hardware and components</p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/shop?category=${encodeURIComponent(cat.name)}`}
            className="group overflow-hidden rounded-lg border border-border bg-card card-hover"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={cat.image}
                alt={cat.name}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <h3 className="mb-1 text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">{cat.name}</h3>
              <p className="mb-3 text-sm text-muted-foreground">{cat.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{cat.productCount} Products</span>
                <span className="flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Browse <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
