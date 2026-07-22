import prompts from "../data/prompts";
import PromptCard from "./PromptCard";

function LatestPrompts() {
  // Latest prompts (last added first)
  const latest = [...prompts].reverse();

  return (
    <section className="bg-[#0B0B14] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-white">
            🆕 Latest Prompts
          </h2>

          <button className="text-purple-400 hover:text-purple-300">
            View All →
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {latest.slice(0, 6).map((prompt) => (
            <PromptCard
              key={prompt.id}
              prompt={prompt}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default LatestPrompts;