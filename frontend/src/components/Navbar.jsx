import { FaBars, FaSearch, FaMoon } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#0B0B14]/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">

        <div className="flex items-center gap-3">
          <FaBars className="text-white text-xl cursor-pointer md:hidden" />

          <h1 className="text-2xl font-bold">
            <span className="text-purple-500">Prompt</span>
            <span className="text-white">Aura</span>
          </h1>
        </div>

        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#" className="hover:text-purple-500">Home</a>
          <a href="#" className="hover:text-purple-500">Categories</a>
          <a href="#" className="hover:text-purple-500">Trending</a>
          <a href="#" className="hover:text-purple-500">New</a>
        </div>

        <div className="flex gap-5 text-xl text-white">
          <FaSearch className="cursor-pointer hover:text-purple-500" />
          <FaMoon className="cursor-pointer hover:text-purple-500" />
        </div>

      </div>
    </nav>
  );
}

export default Navbar;