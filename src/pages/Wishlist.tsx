import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Trash2, Eye, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";
import { useEffect } from "react";

const Wishlist = () => {
  const { wishlist, toggleWishlist, addToCart } = useCart();

  useEffect(() => {
    document.title = "Wishlist | Mag Traders";
    const meta = document.querySelector('meta[name="description"]');
    const content = "Your saved IT hardware products. Move items to cart or browse more from Mag Traders.";
    if (meta) meta.setAttribute("content", content);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = content;
      document.head.appendChild(m);
    }
  }, []);

  const wishlistProducts = products.filter((p) => wishlist.includes(p.id));

  return (
    <main className="min-h-[70vh] bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
        {/* Header */}
        <header className="mb-10 animate-fade-in">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10">
              <Heart className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                My Wishlist
              </h1>
              <p className="mt-1 text-sm text-muted-foreground">
                {wishlistProducts.length} {wishlistProducts.length === 1 ? "item" : "items"} saved
              </p>
            </div>
          </div>
        </header>

        {wishlistProducts.length === 0 ? (
          <section className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card/50 px-6 py-20 text-center animate-fade-in">
            <div className="relative mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
              <Heart className="h-10 w-10 text-primary" strokeWidth={1.5} />
              <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-background text-xs font-bold text-muted-foreground shadow-sm border border-border">
                0
              </span>
            </div>
            <h2 className="text-xl font-semibold text-foreground">Your wishlist is empty</h2>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              Save your favourite hardware here and quickly come back to them when you're ready to order.
            </p>
            <Button asChild size="lg" className="mt-6 gap-2 transition-transform hover:scale-105">
              <Link to="/shop">
                Browse Products
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </section>
        ) : (
          <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {wishlistProducts.map((product, idx) => (
              <article
                key={product.id}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${idx * 60}ms` }}
              >
                <div className="relative overflow-hidden">
                  <Link to={`/product/${product.id}`} className="block">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </Link>
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    aria-label="Remove from wishlist"
                    className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-background/90 backdrop-blur shadow-sm transition-all hover:bg-destructive hover:text-destructive-foreground"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                  <div className="absolute left-3 top-3">
                    {product.inStock ? (
                      <Badge className="bg-primary/90 text-primary-foreground">In Stock</Badge>
                    ) : (
                      <Badge variant="destructive">Out of Stock</Badge>
                    )}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-4">
                  <p className="mb-1 text-xs font-medium text-primary">{product.category}</p>
                  <Link to={`/product/${product.id}`}>
                    <h3 className="mb-2 line-clamp-2 text-sm font-medium text-card-foreground transition-colors hover:text-primary">
                      {product.title}
                    </h3>
                  </Link>
                  <div className="mb-4 flex items-baseline gap-2">
                    <span className="text-lg font-bold text-foreground">£{product.price.toFixed(2)}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        £{product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>

                  <div className="mt-auto flex flex-col gap-2">
                    <Button
                      onClick={() => {
                        addToCart(product);
                        toggleWishlist(product.id);
                      }}
                      disabled={!product.inStock}
                      className="w-full gap-2 transition-transform hover:scale-[1.02]"
                    >
                      <ShoppingCart className="h-4 w-4" />
                      Move to Cart
                    </Button>
                    <div className="grid grid-cols-2 gap-2">
                      <Button asChild variant="outline" size="sm" className="gap-1">
                        <Link to={`/product/${product.id}`}>
                          <Eye className="h-3.5 w-3.5" />
                          View
                        </Link>
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleWishlist(product.id)}
                        className="gap-1 text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </section>
        )}
      </div>
    </main>
  );
};

export default Wishlist;
