import { useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrendingSection from "../components/TrendingSection";
import CategorySection from "../components/CategorySection";
import MostCopied from "../components/MostCopied";
import Footer from "../components/Footer";
import LatestPrompts from "../components/LatestPrompts";

function Home() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="bg-[#0B0B14] min-h-screen">

      <Navbar />

      <Hero
        search={search}
        setSearch={setSearch}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <TrendingSection
        search={search}
        selectedCategory={selectedCategory}
      />

      <CategorySection />

      <MostCopied />

      <LatestPrompts />
      
      <Footer />

    </div>
  );
}

export default Home;

