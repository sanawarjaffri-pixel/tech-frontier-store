import { useParams, Link } from "react-router-dom";
import { ShoppingCart, Heart, Truck, RotateCcw, ShieldCheck, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-foreground">Product Not Found</h1>
        <Button className="mt-4" asChild><Link to="/shop">Back to Shop</Link></Button>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="mb-6 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-foreground">Home</Link> / {" "}
        <Link to="/shop" className="hover:text-foreground">Shop</Link> / {" "}
        <Link to={`/shop?category=${encodeURIComponent(product.category)}`} className="hover:text-foreground">{product.category}</Link> / {" "}
        <span className="text-foreground">{product.title}</span>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Image */}
        <div className="overflow-hidden rounded-lg border border-border bg-card">
          <img src={product.image} alt={product.title} className="aspect-square w-full object-cover" />
        </div>

        {/* Details */}
        <div>
          <div className="mb-2 flex gap-2">
            {product.isNew && <Badge className="bg-primary text-primary-foreground">New</Badge>}
            {product.originalPrice && <Badge variant="destructive">Sale</Badge>}
            <Badge variant="secondary">{product.inStock ? "In Stock" : "Out of Stock"}</Badge>
          </div>

          <h1 className="mb-2 text-2xl font-bold text-foreground lg:text-3xl">{product.title}</h1>
          <p className="mb-1 text-sm text-muted-foreground">SKU: {product.sku}</p>
          <p className="mb-1 text-sm text-primary font-medium">{product.category}</p>

          <div className="my-6 flex items-baseline gap-3">
            <span className="text-3xl font-bold text-foreground">£{product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-lg text-muted-foreground line-through">
                £{product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <p className="mb-6 leading-relaxed text-muted-foreground">{product.description}</p>

          {/* Specs */}
          {product.specs && (
            <div className="mb-6 rounded-lg border border-border bg-secondary/50 p-4">
              <h3 className="mb-3 text-sm font-semibold text-foreground">Specifications</h3>
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key}>
                    <span className="text-xs text-muted-foreground">{key}</span>
                    <p className="text-sm font-medium text-foreground">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quantity + Add to Cart */}
          <div className="mb-6 flex items-center gap-4">
            <div className="flex items-center rounded-md border border-border">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="flex h-10 w-10 items-center justify-center text-foreground transition-colors hover:bg-secondary"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-12 text-center text-sm font-medium text-foreground">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="flex h-10 w-10 items-center justify-center text-foreground transition-colors hover:bg-secondary"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <Button size="lg" className="flex-1 gap-2" onClick={() => addToCart(product, quantity)}>
              <ShoppingCart className="h-4 w-4" />
              Add to Cart
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => toggleWishlist(product.id)}
              className={isInWishlist(product.id) ? "border-destructive text-destructive" : ""}
            >
              <Heart className={`h-4 w-4 ${isInWishlist(product.id) ? "fill-current" : ""}`} />
            </Button>
          </div>

          {/* Trust signals */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { icon: Truck, text: "Fast Delivery" },
              { icon: RotateCcw, text: "Easy Returns" },
              { icon: ShieldCheck, text: "Quality Guaranteed" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex flex-col items-center gap-1 rounded-lg border border-border p-3 text-center">
                <Icon className="h-5 w-5 text-primary" />
                <span className="text-xs text-muted-foreground">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related */}
      {relatedProducts.length > 0 && (
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Related Products</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetails;
