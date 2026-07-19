import { useState } from "react";
import { FaHeart, FaEye, FaCopy } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function PromptCard({ prompt }) {
  const [likes, setLikes] = useState(prompt?.likes || 0);
const [liked, setLiked] = useState(false);

const handleLike = (e) => {
  e.preventDefault();

  if (!liked) {
    setLikes((prev) => prev + 1);
    setLiked(true);
  } else {
    setLikes((prev) => prev - 1);
    setLiked(false);
  }
};

  return (
     <Link to={`/prompt/${prompt.id}`}>
    <div className="bg-[#151521] rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500 transition duration-300">

      <img
        src={prompt.image}
        alt={prompt.title}
        className="w-full h-56 object-cover"
      />

      <div className="p-4">

        <span className="text-xs bg-purple-600 px-3 py-1 rounded-full">
          {prompt.category}
        </span>

        <h3 className="text-xl font-semibold text-white mt-4">
          {prompt.title}
        </h3>

        <div className="flex justify-between mt-5 text-gray-400">

          <button
  onClick={handleLike}
  className="flex items-center gap-2"
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

          <span className="flex items-center gap-2">
            <FaEye className="text-cyan-400" />
            {prompt.views}
          </span>

        </div>

        <button className="mt-5 w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-xl flex justify-center items-center gap-2"
        onClick={(e) => {
          e.preventDefault();

            navigator.clipboard.writeText(prompt?.prompt || "");

           toast.success("Prompt Copied Successfully!");
          }} >

          <FaCopy />

          Copy Prompt

        </button>

      </div>
    </div>
    </Link>
  );
}

export default PromptCard;