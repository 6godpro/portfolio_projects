import SearchBar from "./SearchBar";
import SearchOverlay from "./SearchOverlay";
import SideNav from "./SideNav";
import MobileHeader from "./MobileHeader";
import { useState } from "react";
import { useIsMobile } from "../../hooks/use-mobile";
import { AnimatePresence, motion } from "framer-motion";

interface MainLayoutProps {
  children: React.ReactNode;
  onSearch: (query: string) => void;
}

const MainLayout = ({ children, onSearch }: MainLayoutProps) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const isMobile = useIsMobile();

  const handleSearch = (query: string) => {
    setIsSearchOpen(false);
    onSearch(query);
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--background))] w-full">
      {/* Desktop Layout */}
      {!isMobile && (
        <>
          <div className="fixed left-0 top-0 h-full z-30">
            <SideNav />
          </div>
          
          <div className="fixed top-0 left-60 right-0 z-20">
            <SearchBar onSearchClick={() => setIsSearchOpen(true)}/>
          </div>
          
          <main className="ml-60 mt-20 p-6">
            {children}
          </main>
        </>
      )}

      {/* Mobile Layout */}
      {isMobile && (
        <div className="flex flex-col">
          <MobileHeader
            onMenuClick={() => setIsMobileSidebarOpen(true)}
            onSearchClick={() => setIsSearchOpen(true)}
          />
          <main className="flex-1 p-4">{children}</main>
        </div>
      )}

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobile && isMobileSidebarOpen && (
          <>
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 h-full w-80 shadow-strong z-50"
              style={{
                background: "hsl(var(--card))",
              }}
            >
              <SideNav
                isMobile={true}
                onClose={() => setIsMobileSidebarOpen(false)}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Search Overlay */}
      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSearch={handleSearch}
      />
    </div>
  );
};

export default MainLayout;
