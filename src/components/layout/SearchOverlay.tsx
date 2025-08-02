import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import { Input } from "../ui/input";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onSearch: (query: string) => void;
}

const SearchOverlay = ({ isOpen, onClose, onSearch }: SearchOverlayProps) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query) {
      onSearch(query.trim());
      setQuery("");
    }
  };

  const handleClose = () => {
    setQuery("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-start justify-center pt-32"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ backdropFilter: "blur(0px)" }}
            animate={{ backdropFilter: "blur(8px)" }}
            exit={{ backdropFilter: "blur(0px)" }}
            className="absolute inset-0 bg-black/20"
            onClick={handleClose}
          />

          {/* Search Input */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: -20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: -20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-2xl mx-4"
          >
            <form onSubmit={handleSubmit} className="relative">
              <div
                className="relative rounded-2xl shadow-strong border overflow-hidden"
                style={{ background: "hsl(var(--card))", borderColor: "hsl(var(--border))" }}
              >
                <Input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search for products, brands, categories..."
                  className="w-full pl-5 md:pl-8 pr-10 md:pr-14 py-2 text-sm md:text-lg border-0 bg-transparent focus:ring-0 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={handleClose}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 hover:bg-muted rounded-full transition-colors"
                >
                  <X className="size-4 md:size-6" style={{ color: "hsl(var(--muted-foreground))" }} />
                </button>
              </div>
            </form>

            {/* Search Suggestions */}
            {query && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 rounded-xl shadow-medium border p-4"
                style={{ background: "hsl(var(--card))", borderColor: "hsl(var(--border))" }}
              >
                <p className="text-sm mb-4" style={{ color: "hsl(var(--muted-foreground))" }}>Popular searches:</p>
                <div className="flex flex-wrap gap-2">
                  {["Men", "Women", "Watches", "Accessories"].map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => {
                        setQuery(suggestion);
                        onSearch(suggestion);
                      }}
                      className="px-3 py-1 hover:bg-border text-xs md:text-sm rounded-full transition-colors"
                      style={{ background: "hsl(var(--muted))" }}
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchOverlay;
