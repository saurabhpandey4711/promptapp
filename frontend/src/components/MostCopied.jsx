import prompts from "../data/prompts";
import { FaCopy } from "react-icons/fa";

function MostCopied() {
  return (
    <section className="bg-[#0B0B14] py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white">
            📋 Most Copied Prompts
          </h2>

          <button className="text-purple-500 hover:text-purple-400">
            View All →
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {prompts.map((prompt) => (

            <div
              key={prompt.id}
              className="bg-[#151521] rounded-2xl p-4 flex gap-4 border border-gray-800 hover:border-purple-500 transition"
            >

              <img
                src={prompt.image}
                alt={prompt.title}
                className="w-28 h-28 rounded-xl object-cover"
              />

              <div className="flex-1">

                <h3 className="text-white text-xl font-semibold">
                  {prompt.title}
                </h3>

                <p className="text-gray-400 mt-2">
                  {prompt.category}
                </p>

                <div className="flex items-center gap-2 mt-4 text-purple-400">
                  <FaCopy />
                  {prompt.copies} Copies
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default MostCopied;