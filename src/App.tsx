import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import MainLayout from "./components/layout/MainLayout";
import { ProductGrid } from "./components/products/ProductGrid";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <MainLayout onSearch={setSearchQuery}>
      <div className="space-y-12">{!searchQuery && <Hero />}</div>
      <div className={!searchQuery ? "py-12 md:px-10" : "py-6 md:px-10"}>
        {!searchQuery && (
          <div className="flex justify-center items-center md:w-150 bg-[hsl(var(--muted))] border border-[hsl(var(--border))] h-10 mb-10 mx-auto rounded-full space-x-4 md:space-x-10">
            <button className="cursor-pointer text-xs md:text-sm">All</button>
            <button className="cursor-pointer text-xs md:text-sm">Men</button>
            <button className="cursor-pointer text-xs md:text-sm">Women</button>
            <button className="cursor-pointer text-xs md:text-sm">Electronics</button>
            <button className="cursor-pointer text-xs md:text-sm">Jewelery</button>
          </div>
        )}
        <ProductGrid searchQuery={searchQuery} />
      </div>
    </MainLayout>
  );
}

export default App;
