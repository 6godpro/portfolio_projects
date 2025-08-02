import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import MainLayout from "./components/layout/MainLayout";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <MainLayout onSearch={setSearchQuery}>
      <div className="space-y-12">{!searchQuery && <Hero />}</div>
      <div className="h-dvh"></div>
    </MainLayout>
  );
}

export default App;
