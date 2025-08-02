import { motion } from "framer-motion";
import { Search } from "lucide-react";

interface SearchBarProps {
  onSearchClick: () => void;
}

const SearchBar = ({ onSearchClick }: SearchBarProps) => {
  return (
    <div
      className="h-20 border-b flex items-center justify-center px-6"
      style={{ borderColor: "hsl(var(--border))", backdropFilter: "blur(8px)" }}
    >
      <motion.button
        onClick={onSearchClick}
        className="flex items-center space-x-3 px-6 py-3 rounded-full hover:bg-border transition-colors group max-w-md w-full"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        style={{
          color: "hsl(var(--muted-foreground))",
          background: "hsl(var(--muted))",
        }}
      >
        <span className="group-hover:text-foreground transition-colors text-left flex-1">
          Search for products...
        </span>
        <Search className="size-4 md:size-5 text-muted-foreground group-hover:text-foreground transition-colors" />
      </motion.button>
    </div>
  );
};

export default SearchBar;
