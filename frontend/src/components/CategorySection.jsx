import categories from "../data/categories";
import CategoryCard from "./CategoryCard";

function CategorySection() {
  return (
    <section  id="categories" className="bg-[#0B0B14] py-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">

          <h2 className="text-4xl font-bold text-white">
            Browse Categories
          </h2>

          <p className="text-gray-400 mt-4">
            Find the perfect AI prompts by category.
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default CategorySection;