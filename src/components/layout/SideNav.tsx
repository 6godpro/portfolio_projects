import { motion } from "framer-motion";
import { Home, ShoppingBag, Heart, User, X } from "lucide-react";
import CartIcon from "../ui/CartIcon";

interface SideNavProps {
  isMobile?: boolean;
  onClose?: () => void;
}

const categories = [
  { name: "Home", icon: Home, href: "/" },
  { name: "New Arrivals", icon: ShoppingBag, href: "/new" },
  { name: "Women", icon: User, href: "/women" },
  { name: "Men", icon: User, href: "/men" },
  { name: "Accessories", icon: ShoppingBag, href: "/accessories" },
  { name: "Sale", icon: Heart, href: "/sale" },
];

const SideNav = ({ isMobile = false, onClose }: SideNavProps) => {
  return (
    <motion.nav
      className={`${
        isMobile ? "w-full h-full" : "w-72 h-screen"
      } border-r flex flex-col`}
      style={{
        borderColor: "hsl(var(--border))",
        background: "hsl(var(--card))",
      }}
    >
      {/* Header */}
      <div
        className="p-3.5 md:p-6 border-b flex items-center justify-between"
        style={{
          borderColor: "hsl(var(--border))",
        }}
      >
        <motion.h1
          className="text-2xl font-bold tracking-tight"
          whileHover={{ scale: 1.05 }}
          style={{
            color: "hsl(var(--foreground))",
          }}
        >
          BUYBASE
        </motion.h1>
        {isMobile && onClose && (
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <X className="size-5" />
          </button>
        )}
      </div>

      {/* Navigation Links */}
      <div className="flex-1 p-6">
        <ul className="space-y-2">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.li
                key={category.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                id="sidebar"
              >
                <a
                  href={category.href}
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] hover:bg-[hsl(var(--muted))] transition-all duration-200 group"
                >
                  <Icon className="size-5 group-hover:scale-120 transition-transform" />
                  <span className="font-medium">{category.name}</span>
                </a>
              </motion.li>
            );
          })}
        </ul>
      </div>

      {/* Footer */}
      <div
        className="p-6 border-t space-y-4"
        style={{
          borderColor: "hsl(var(--border))",
        }}
      >
        <CartIcon />
      </div>
    </motion.nav>
  );
};

export default SideNav;
