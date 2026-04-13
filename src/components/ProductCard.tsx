import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="group relative overflow-hidden rounded-lg border border-border bg-card card-hover">
      {/* Badges */}
      <div className="absolute left-3 top-3 z-10 flex flex-col gap-1">
        {product.isNew && (
          <Badge className="bg-primary text-primary-foreground">New</Badge>
        )}
        {discount > 0 && (
          <Badge variant="destructive">-{discount}%</Badge>
        )}
      </div>

      {/* Wishlist */}
      <button
        onClick={() => toggleWishlist(product.id)}
        className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-background/80 backdrop-blur transition-colors hover:bg-background"
      >
        <Heart
          className={`h-4 w-4 ${isInWishlist(product.id) ? "fill-destructive text-destructive" : "text-muted-foreground"}`}
        />
      </button>

      {/* Image */}
      <Link to={`/product/${product.id}`} className="block overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </Link>

      {/* Quick actions */}
      <div className="absolute bottom-[calc(50%)] left-0 right-0 flex items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
        <Button size="sm" onClick={() => addToCart(product)} className="gap-1 shadow-lg">
          <ShoppingCart className="h-3.5 w-3.5" />
          Add to Cart
        </Button>
        <Button size="sm" variant="secondary" asChild className="shadow-lg">
          <Link to={`/product/${product.id}`}>
            <Eye className="h-3.5 w-3.5" />
          </Link>
        </Button>
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="mb-1 text-xs font-medium text-primary">{product.category}</p>
        <Link to={`/product/${product.id}`}>
          <h3 className="mb-2 text-sm font-medium text-card-foreground line-clamp-2 transition-colors hover:text-primary">
            {product.title}
          </h3>
        </Link>
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-foreground">£{product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              £{product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
        <p className="mt-1 text-xs text-muted-foreground">SKU: {product.sku}</p>
      </div>
    </div>
  );
};

export default ProductCard;
