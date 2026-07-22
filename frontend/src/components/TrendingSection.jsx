// import prompts from "../data/prompts";
//import PromptCard from "./PromptCard";
import { useEffect, useState } from "react";
import { getPrompts } from "../services/promptService";
import PromptCard from "./PromptCard";

function TrendingSection({ search, selectedCategory }) {
  const [prompts, setPrompts] = useState([]);
  const [loading, setLoading] = useState(true);


    useEffect(() => {
      const fetchPrompts = async () => {
    try {
      const data = await getPrompts();
      setPrompts(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

    fetchPrompts();
  }, []);

  const filteredPrompts = prompts.filter((prompt) => {
    const matchSearch = prompt.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      selectedCategory === "All" ||
      prompt.categoryName === selectedCategory;

    return matchSearch && matchCategory;
  });

  if (loading) {
    return (
      <section className="bg-[#0B0B14] py-20 text-center text-white">
        Loading...
      </section>
    );
  }

  return (
    <section className="bg-[#0B0B14] py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white">
            🔥 Trending Prompts
          </h2>

          <button className="text-purple-500 hover:text-purple-400">
            View All →
          </button>
        </div>

        {filteredPrompts.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8">
            {filteredPrompts.map((prompt) => (
              <PromptCard
                key={prompt.id}
                prompt={prompt}
              />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-400 text-xl py-10">
            No Prompts Found
          </div>
        )}

      </div>
    </section>
  );
}

export default TrendingSection;