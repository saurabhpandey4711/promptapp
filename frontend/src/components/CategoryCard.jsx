import { Link } from "react-router-dom";

function CategoryCard({ category }) {
  return (
    <Link
      to={`/category/${category.name}`}
      className="group bg-[#161625] rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500 transition duration-300"
    >
      <img
        src={category.image}
        alt={category.name}
        className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
      />

      <div className="p-5 text-center">
        <h3 className="text-xl font-bold text-white">
          {category.name}
        </h3>

        <p className="text-gray-400 mt-2">
          {category.count}+ Prompts
        </p>
      </div>
    </Link>
  );
}

export default CategoryCard;