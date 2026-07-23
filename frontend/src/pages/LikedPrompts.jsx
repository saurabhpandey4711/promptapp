import { useEffect, useState } from "react";
import { getLikedPrompts } from "../services/likeService";
import PromptCard from "../components/PromptCard";

function LikedPrompts() {

  const [prompts, setPrompts] = useState([]);

  useEffect(() => {

 const loadLikedPrompts = async () => {
    try {

      const res = await getLikedPrompts(1);

      setPrompts(res.prompts);

    } catch (err) {
      console.log(err);
    }
  };

    loadLikedPrompts();
  }, []);

//   const loadLikedPrompts = async () => {
//     try {

//       const res = await getLikedPrompts(1);

//       setPrompts(res.prompts);

//     } catch (err) {
//       console.log(err);
//     }
//   };

  return (
    <div className="min-h-screen bg-[#0B0B14] p-10">

      <h1 className="text-4xl font-bold text-white mb-8">
        ❤️ Liked Prompts
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        {prompts.length > 0 ? (

          prompts.map((prompt) => (
            <PromptCard
              key={prompt.id}
              prompt={prompt}
            />
          ))

        ) : (

          <p className="text-gray-400">
            No liked prompts yet.
          </p>

        )}

      </div>

    </div>
  );

}

export default LikedPrompts;