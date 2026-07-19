import { FaSearch } from "react-icons/fa";

function SearchBar({ search, setSearch }) {
  return (
    <div className="flex mt-8">

      <input
        type="text"
        placeholder="Search prompts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1 bg-[#161625] px-5 py-4 rounded-l-xl outline-none text-white"
      />

      <button className="bg-purple-600 px-6 rounded-r-xl">
        <FaSearch />
      </button>

    </div>
  );
}

export default SearchBar;