import { Link } from "react-router-dom";
import { Truck, RotateCcw, ShieldCheck, Headphones, ArrowRight, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";
import heroGpu from "@/assets/hero-gpu.png";
import heroHdd from "@/assets/hero-hdd.png";
import heroRouter from "@/assets/hero-router.png";

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
      <section className="hero-gradient relative flex min-h-screen items-center overflow-hidden">
        {/* Animated gradient layers */}
        <div className="hero-bg-animate absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(222_100%_52%/0.22),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(222_100%_52%/0.12),transparent_55%)]" />

        {/* Floating background hardware (right side) */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          {/* Soft glow orbs */}
          <div className="absolute top-1/4 right-[10%] h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-float-slow" />
          <div className="absolute bottom-10 right-1/3 h-56 w-56 rounded-full bg-primary/10 blur-3xl animate-float-medium" />

          {/* GPU - large, top right */}
          <img
            src={heroGpu}
            alt=""
            className="absolute -right-10 top-10 w-[44%] max-w-[520px] opacity-70 animate-float-slow drop-shadow-[0_25px_50px_hsl(222_100%_52%/0.35)] hidden md:block"
            loading="eager"
          />
          {/* Router - middle right */}
          <img
            src={heroRouter}
            alt=""
            className="absolute right-[28%] bottom-8 w-[22%] max-w-[260px] opacity-60 animate-float-medium drop-shadow-[0_20px_40px_hsl(220_20%_5%/0.5)] hidden lg:block"
            loading="lazy"
          />
          {/* HDD - lower right */}
          <img
            src={heroHdd}
            alt=""
            className="absolute right-[6%] bottom-6 w-[18%] max-w-[200px] opacity-65 animate-float-fast drop-shadow-[0_20px_40px_hsl(220_20%_5%/0.5)] hidden lg:block"
            loading="lazy"
          />

          {/* Decorative floating shapes */}
          <div className="absolute top-20 right-[55%] h-3 w-3 rounded-full bg-primary/60 animate-float-fast" />
          <div className="absolute bottom-24 right-[48%] h-2 w-2 rounded-full bg-primary/50 animate-float-medium" />
          <div className="absolute top-1/2 right-[40%] h-4 w-4 rotate-45 border border-primary/40 animate-float-slow" />
        </div>

        {/* Left-aligned text content */}
        <div className="relative mx-auto w-full max-w-7xl px-6 py-16 md:px-8 md:py-20">
          <div className="max-w-2xl text-left">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-4 py-2 text-sm font-medium text-primary shadow-[0_0_24px_hsl(222_100%_52%/0.35)] backdrop-blur-sm animate-fade-in opacity-0 [animation-delay:0.1s] [animation-fill-mode:forwards]">
              <Sparkles className="h-3.5 w-3.5" />
              UK's Trusted IT Hardware Supplier
            </span>
            <h1 className="mb-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-surface-dark-foreground sm:text-6xl lg:text-7xl animate-hero-slide-up opacity-0 [animation-delay:0.25s] [animation-fill-mode:forwards]">
              Premium Computer
              <br />
              <span className="text-gradient">Hardware</span>
              <span className="text-surface-dark-foreground/90"> & </span>
              <span className="text-gradient">Components</span>
            </h1>
            <p className="mb-10 max-w-xl text-lg text-surface-dark-foreground/70 sm:text-xl leading-[1.7] font-light animate-fade-in opacity-0 [animation-delay:0.5s] [animation-fill-mode:forwards]">
              Enterprise-grade IT equipment for businesses and professionals.
              Graphics cards, networking, storage, and more at competitive prices.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in opacity-0 [animation-delay:0.7s] [animation-fill-mode:forwards]">
              <Button
                size="lg"
                asChild
                className="gap-2 px-7 h-12 text-base font-semibold rounded-full shadow-[0_10px_30px_-5px_hsl(222_100%_52%/0.6)] transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_40px_-5px_hsl(222_100%_52%/0.8)] hover:-translate-y-0.5"
              >
                <Link to="/shop">
                  Shop Now <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="px-7 h-12 text-base font-semibold rounded-full border-surface-dark-foreground/25 bg-surface-dark-foreground/5 backdrop-blur-sm text-surface-dark-foreground hover:bg-surface-dark-foreground/15 hover:border-surface-dark-foreground/40 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
              >
                <Link to="/categories">Browse Categories</Link>
              </Button>
            </div>
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
