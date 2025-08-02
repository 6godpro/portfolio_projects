import { ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import CartDrawer from "../cart/CartDrawer";

const CartIcon = () => {
  const [itemCount] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <motion.button
        onClick={() => setIsCartOpen(true)}
        className="relative p-2 hover:bg-[hsl(var(--muted))] transition-colors group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <ShoppingBag className="size-5 md:text-[hsl(var(--muted-foreground))] group-hover:text-[hsl(var(--primary))] transition-colors" />

        {itemCount > 0 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 size-5 text-xs text-[hsl(var(--primary-foreground))] bg-[hsl(var(--primary))] font-bold rounded-full flex items-center justify-center"
          >
            {itemCount > 9 ? "9+" : itemCount}
          </motion.span>
        )}
      </motion.button>

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => {
          setIsCartOpen(false);
        }}
      />
    </>
  );
};

export default CartIcon;
