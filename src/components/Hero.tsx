import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-8 md:pt-16 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 opacity-50 bg-[hsl(var(--gradient-subtle))]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 px-4 py-2 border rounded-full"
            style={{
              color: "hsl(var(--primary))",
              backgroundColor: "hsl(var(--primary)/0.1)",
              borderColor: "hsl(var(--primary)/0.2)",
            }}
          >
            <Sparkles className="size-4" />
            <span className="text-sm font-medium">
              New Collection Available
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-9xl font-bold leading-tight">
              Discover Your
              <span
                className="block bg-clip-text text-[hsl(var(--primary))]"
              >
                Perfect Style
              </span>
            </h1>
            <p
              className="text-sm md:text-xl text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto"
            >
              Curated fashion pieces that reflect your unique personality. From
              everyday essentials to statement pieces.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95, backgroundColor: "hsl(var(--primary-glow))" }}
              className="flex items-center space-x-2 px-8 py-4 rounded-xl transition-colors text-[hsl(var(--primary-foreground))] bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-glow))] shadow-[hsl(var(--medium))] font-medium"
            >
              <span>Shop Now</span>
              <ArrowRight className="size-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--muted))" }}
              whileTap={{ scale: 0.95, backgroundColor: "hsl(var(--muted))" }}
              className="px-4 py-4 border rounded-xl transition-colors font-medium"
              style={{ borderColor: "hsl(var(--border))" }}
            >
              Explore Collections
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center space-x-5 md:space-x-20 pt-2"
          >
            <div className="text-center">
              <div className="text-2xl font-bold">1K+</div>
              <div className="text-sm" style={{color: "hsl(var(--muted-foreground))"}}>
                Happy Customers
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm" style={{color: "hsl(var(--muted-foreground))"}}>Products</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">50+</div>
              <div className="text-sm" style={{color: "hsl(var(--muted-foreground))"}}>Brands</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
