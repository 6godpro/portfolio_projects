import { Menu, Search } from "lucide-react";
import { motion } from "framer-motion";
import CartIcon from "../ui/CartIcon";

interface MobileHeaderProps {
  onMenuClick: () => void;
  onSearchClick: () => void;
}

const MobileHeader = ({ onMenuClick, onSearchClick }: MobileHeaderProps) => {
  return (
    <header className="h-16 bg-card border-b flex items-center justify-between px-4" style={{borderColor: "hsl(var(--border))"}}>
      {/* Left - Menu */}
      <motion.button
        onClick={onMenuClick}
        className="p-2 hover:bg-muted rounded-lg transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Menu className="size-6" />
      </motion.button>

      {/* Center - Logo */}
      <motion.h1 
        className="text-xl font-bold tracking-tight"
        whileHover={{ scale: 1.05 }}
      >
        BUYBASE
      </motion.h1>

      {/* Right - Search, Account, Cart */}
      <div className="flex items-center space-x-2">
        <motion.button
          onClick={onSearchClick}
          className="p-2 hover:bg-muted rounded-lg transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Search className="h-5 w-5" />
        </motion.button>
        <CartIcon />
      </div>
    </header>
  );
}

export default MobileHeader;