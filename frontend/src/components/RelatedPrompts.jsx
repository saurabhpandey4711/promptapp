import { Link } from "react-router-dom";
import prompts from "../data/prompts";

function RelatedPrompts({ currentPrompt }) {
  const related = prompts.filter(
    (item) =>
      item.category === currentPrompt.category &&
      item.id !== currentPrompt.id
  );

  if (related.length === 0) return null;

  return (
    <div className="mt-16">

      <h2 className="text-3xl font-bold mb-8">
        Related Prompts
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {related.map((item) => (

          <Link
            key={item.id}
            to={`/prompt/${item.id}`}
            className="bg-[#161625] rounded-2xl overflow-hidden hover:border-purple-500 border border-gray-800 transition"
          >

            <img
              src={item.image}
              alt={item.title}
              className="w-full h-52 object-cover"
            />

            <div className="p-5">

              <h3 className="text-xl font-semibold">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-2">
                {item.category}
              </p>

            </div>

          </Link>

        ))}

      </div>

    </div>
  );
}

export default RelatedPrompts;