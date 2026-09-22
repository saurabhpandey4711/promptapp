import { useEffect, useState } from "react";
import {
  getCategories,
  addCategory,
} from "../../services/categoryService";

function ManageCategories() {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadCategories();
  }, []);
  
  const loadCategories = async () => {
    try {
      const data = await getCategories();
      setCategories(data);
    } catch (error) {
      console.error("Failed to load categories:", error);
    }
  };




  const handleAddCategory = async (e) => {
    e.preventDefault();

    if (!categoryName.trim()) {
      setMessage("Please enter a category name");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const data = await addCategory(categoryName.trim());

      setMessage(data.message);
      setCategoryName("");

      // Refresh category list
      await loadCategories();
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
          "Failed to add category"
      );
    } finally {
      setLoading(false);
    }
  };

  

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-6">
        Manage Categories
      </h1>

      {/* Add Category */}
      <form
        onSubmit={handleAddCategory}
        className="flex gap-3 mb-6"
      >
        <input
          type="text"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          placeholder="Enter category name"
          className="border rounded-lg px-4 py-2 flex-1"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-purple-600 text-white px-5 py-2 rounded-lg"
        >
          {loading ? "Adding..." : "Add Category"}
        </button>
      </form>

      {/* Message */}
      {message && (
        <p className="mb-5 text-sm">
          {message}
        </p>
      )}

      {/* Category List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="border rounded-lg p-4 bg-white shadow-sm"
          >
            <p className="font-medium">
              {category.name}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default ManageCategories;