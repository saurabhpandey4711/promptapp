import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaHeart, FaEye, FaCopy } from "react-icons/fa";
import { toast } from "react-toastify";

import { getPromptById } from "../services/promptService";

function PromptDetails() {
  const { id } = useParams();

  const [prompt, setPrompt] = useState(null);
  const [loading, setLoading] = useState(true);

  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  useEffect(() => {

    const fetchPrompt = async () => {
    try {
      const data = await getPromptById(id);

      setPrompt(data);

      // फिलहाल likes database में नहीं है,
      // इसलिए views को temporary value की तरह दिखा रहे हैं।
      setLikes(data.views);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

    fetchPrompt();
  }, [id]);

  

  const handleLike = () => {
    if (!liked) {
      setLikes((prev) => prev + 1);
      setLiked(true);
    } else {
      setLikes((prev) => prev - 1);
      setLiked(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt.prompt_text);

    toast.success("Prompt Copied Successfully!");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0B0B14] flex justify-center items-center text-white text-2xl">
        Loading...
      </div>
    );
  }


    return (
    <section className="min-h-screen bg-[#0B0B14] py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

        {/* Image */}

        <div>
          <img
            src={prompt.image}
            alt={prompt.title}
            className="w-full h-[500px] object-cover rounded-3xl"
          />
        </div>

        {/* Details */}

        <div>

          <span className="bg-purple-600 px-4 py-2 rounded-full text-white">
            {prompt.categoryName}
          </span>

          <h1 className="text-4xl font-bold text-white mt-6">
            {prompt.title}
          </h1>

          <p className="text-gray-400 mt-5">
            {prompt.description}
          </p>

          <div className="bg-[#151521] rounded-2xl p-5 mt-8">

            <h3 className="text-xl text-white font-semibold mb-4">
              AI Prompt
            </h3>

            <p className="text-gray-300 whitespace-pre-line">
              {prompt.prompt_text}
            </p>

          </div>

          <div className="flex gap-6 mt-8">

            <button
              onClick={handleLike}
              className="flex items-center gap-2 bg-[#151521] px-5 py-3 rounded-xl text-white"
            >
              <FaHeart
                className={
                  liked
                    ? "text-red-500"
                    : "text-pink-500"
                }
              />

              {likes}
            </button>

            <div className="flex items-center gap-2 bg-[#151521] px-5 py-3 rounded-xl text-white">

              <FaEye className="text-cyan-400" />

              {prompt.views}

            </div>

          </div>

          <button
            onClick={handleCopy}
            className="mt-8 w-full bg-purple-600 hover:bg-purple-700 py-4 rounded-2xl text-white flex justify-center items-center gap-3"
          >

            <FaCopy />

            Copy Prompt

          </button>

        </div>

      </div>
    </section>
  );
}

export default PromptDetails;