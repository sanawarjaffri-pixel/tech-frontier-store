import { Link } from "react-router-dom";
import { Truck, RotateCcw, ShieldCheck, Headphones, ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";

const features = [
  { icon: Truck, title: "Delivery in 24h", description: "Fast UK-wide delivery on all orders" },
  { icon: RotateCcw, title: "24 Hours Return", description: "Easy returns within 24 hours" },
  { icon: ShieldCheck, title: "Quality Guarantee", description: "All products quality tested" },
  { icon: Headphones, title: "24/7 Support", description: "Round the clock customer support" },
];

const HomePage = () => {
  const featuredProducts = products.filter((p) => p.featured);
  const newProducts = products.filter((p) => p.isNew);

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="hero-bg-animate absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(222_100%_52%/0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(222_100%_52%/0.08),transparent_50%)]" />
        <div className="relative mx-auto flex max-w-7xl min-h-[520px] flex-col items-center justify-center px-6 py-20 text-center md:px-8">
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary animate-fade-in opacity-0 [animation-delay:0.1s] [animation-fill-mode:forwards]">
            UK's Trusted IT Hardware Supplier
          </span>
          <h1 className="mb-6 max-w-3xl text-3xl font-bold leading-tight text-surface-dark-foreground sm:text-4xl md:text-5xl lg:text-6xl animate-hero-slide-up opacity-0 [animation-delay:0.25s] [animation-fill-mode:forwards]">
            Premium Computer
            <span className="text-gradient"> Hardware </span>
            & Components
          </h1>
          <p className="mb-8 max-w-xl text-base text-surface-dark-foreground/60 sm:text-lg animate-fade-in opacity-0 [animation-delay:0.5s] [animation-fill-mode:forwards]">
            Enterprise-grade IT equipment for businesses and professionals.
            Graphics cards, networking, storage, and more at competitive prices.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in opacity-0 [animation-delay:0.7s] [animation-fill-mode:forwards]">
            <Button size="lg" asChild className="gap-2 transition-transform duration-200 hover:scale-105">
              <Link to="/shop">
                Shop Now <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-surface-dark-foreground/20 bg-transparent text-surface-dark-foreground hover:bg-surface-dark-foreground/10 transition-transform duration-200 hover:scale-105">
              <Link to="/categories">Browse Categories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-b border-border bg-secondary/50">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-0 px-6 sm:grid-cols-2 lg:grid-cols-4 md:px-8">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`flex items-center gap-4 px-4 py-6 ${i < 3 ? "lg:border-r lg:border-border" : ""}`}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">{feature.title}</h3>
                <p className="text-xs text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Shop by Category</h2>
            <p className="mt-1 text-muted-foreground">Find exactly what you need</p>
          </div>
          <Button variant="ghost" asChild className="gap-1">
            <Link to="/categories">View All <ChevronRight className="h-4 w-4" /></Link>
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${encodeURIComponent(cat.name)}`}
              className="group overflow-hidden rounded-lg border border-border bg-card card-hover"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-3 text-center">
                <h3 className="text-sm font-medium text-card-foreground">{cat.name}</h3>
                <p className="text-xs text-muted-foreground">{cat.productCount} Products</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-secondary/30 py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mb-10 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Featured Products</h2>
              <p className="mt-1 text-muted-foreground">Hand-picked top sellers</p>
            </div>
            <Button variant="ghost" asChild className="gap-1">
              <Link to="/shop">View All <ChevronRight className="h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Products */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Latest Arrivals</h2>
            <p className="mt-1 text-muted-foreground">Newest additions to our catalog</p>
          </div>
          <Button variant="ghost" asChild className="gap-1">
            <Link to="/shop">View All <ChevronRight className="h-4 w-4" /></Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {newProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="hero-gradient py-16">
        <div className="mx-auto max-w-7xl px-6 text-center md:px-8">
          <h2 className="mb-3 text-2xl font-bold text-surface-dark-foreground">Stay Updated</h2>
          <p className="mb-8 text-surface-dark-foreground/60">
            Subscribe to get notified about new products and exclusive deals.
          </p>
          <div className="mx-auto flex max-w-md gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-11 flex-1 rounded-md border border-surface-dark-foreground/20 bg-surface-dark-foreground/5 px-4 text-surface-dark-foreground placeholder:text-surface-dark-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button size="lg">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
