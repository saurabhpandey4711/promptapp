import { Link } from "react-router-dom";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";

function DashboardPromptCard({ prompt,onDelete }) {
  return (
    <div className="bg-[#151521] rounded-2xl overflow-hidden border border-gray-800">

      <img
        src={prompt.image}
        alt={prompt.title}
        className="w-full h-52 object-cover"
      />

      <div className="p-4">

        <span className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
          {prompt.categoryName}
        </span>

        <h2 className="text-xl text-white font-bold mt-4">
          {prompt.title}
        </h2>

        <p className="text-gray-400 mt-2 line-clamp-2">
          {prompt.description}
        </p>

        <div className="flex items-center gap-2 mt-4 text-cyan-400">
          <FaEye />
          {prompt.views}
        </div>

        <div className="flex gap-3 mt-6">

          <Link
            to={`/edit-prompt/${prompt.id}`}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg flex justify-center items-center gap-2"
          >
            <FaEdit />
            Edit
          </Link>

          <button
             onClick={() => onDelete(prompt.id)}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg flex justify-center items-center gap-2"
          >
            <FaTrash />
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}

export default DashboardPromptCard;