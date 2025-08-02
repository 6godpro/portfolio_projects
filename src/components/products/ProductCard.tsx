import { motion } from "framer-motion";
import { Heart, Star } from "lucide-react";
import { useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  rating: { rate: number; count: number };
}

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.3 }}
      className="group cursor-pointer"
    >
      <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl overflow-hidden shadow-[hsl(var(--soft))] hover:shadow-medium transition-all duration-300 group-hover:-translate-y-1">
        {/* Image Container */}
        <div className="relative aspect-4/3 overflow-hidden bg-[hsl(var(--muted))]">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-[hsl(var(--muted))] animate-pulse" />
          )}
          <motion.img
            src={product.image}
            alt={product.title}
            className={`w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setImageLoaded(true)}
            loading="lazy"
          />

          {/* Wishlist Button */}
          <motion.button
            onClick={(e) => {
              e.stopPropagation();
              setIsLiked(!isLiked);
            }}
            className="absolute top-3 right-3 p-2 bg-[hsl(var(--muted)/0.9)] backdrop-blur-sm rounded-full shadow-soft opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Heart
              className={`h-4 w-4 transition-colors ${
                isLiked ? "fill-primary text-[hsl(var(--primary))]" : "text-[hsl(var(--muted-foreground))]"
              }`}
            />
          </motion.button>

          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <span className="px-2 py-1 bg-[hsl(var(--primary)/0.9)] text-[hsl(var(--primary-foreground))] text-xs font-medium rounded-full backdrop-blur-sm">
              {product.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          <h3 className="font-semibold text-[hsl(var(--foreground))] line-clamp-2 group-hover:text-[hsl(var(--primary))] transition-colors">
            {product.title}
          </h3>

          {/* Rating */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-[hsl(var(--primary))] text-[hsl(var(--primary))]" />
              <span className="text-sm font-medium">{product.rating.rate}</span>
            </div>
            <span className="text-xs text-[hsl(var(--muted-foreground))]">
              ({product.rating.count} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-[hsl(var(--foreground))]">
              ${product.price}
            </span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] rounded-lg hover:bg-[hsl(var(--primary-glow))] transition-colors text-sm font-medium"
            >
              Add to Cart
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
