import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setMenuOpen(false);
    navigate("/");
  };

  return (
    <nav className="bg-[#0B0B14] border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-purple-500"
        >
          PromptAura
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">

          <Link
            to="/"
            className="text-white hover:text-purple-500 transition"
          >
            Home
          </Link>

          <Link
            to="/admin"
            className="text-white hover:text-purple-500 transition"
          >
            Admin
          </Link>

          <a
            href="#categories"
            className="text-white hover:text-purple-500 transition"
          >
            Categories
          </a>

          <a
            href="#trending"
            className="text-white hover:text-purple-500 transition"
          >
            Trending
          </a>

          {user ? (
            <>
              <Link
                to="/dashboard"
                className="text-white hover:text-purple-500 transition"
              >
                Dashboard
              </Link>

              <Link
                to="/profile"
                className="text-white hover:text-purple-500 transition"
              >
                Profile
              </Link>

              <Link
                to="/liked"
                className="text-white hover:text-purple-500 transition"
              >
                ❤️ Liked
              </Link>

              <Link
                to="/add-prompt"
                className="text-white hover:text-purple-500 transition"
              >
                Add Prompt
              </Link>

              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-white hover:text-purple-500 transition"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-lg text-white"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#111122] px-6 py-4 flex flex-col gap-4">

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="text-white"
          >
            Home
          </Link>

          <Link
            to="/admin"
            onClick={() => setMenuOpen(false)}
            className="text-white"
          >
            Admin
          </Link>

          <a
            href="#categories"
            onClick={() => setMenuOpen(false)}
            className="text-white"
          >
            Categories
          </a>

          <a
            href="#trending"
            onClick={() => setMenuOpen(false)}
            className="text-white"
          >
            Trending
          </a>

          {user ? (
            <>
              <Link
                to="/dashboard"
                onClick={() => setMenuOpen(false)}
                className="text-white"
              >
                Dashboard
              </Link>

              <Link
                to="/profile"
                onClick={() => setMenuOpen(false)}
                className="text-white"
              >
                Profile
              </Link>

              <Link
                to="/liked"
                onClick={() => setMenuOpen(false)}
                className="text-white"
              >
                ❤️ Liked
              </Link>

              <Link
                to="/add-prompt"
                onClick={() => setMenuOpen(false)}
                className="text-white"
              >
                Add Prompt
              </Link>

              <button
                onClick={handleLogout}
                className="bg-red-600 py-2 rounded-lg text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="text-white"
              >
                Login
              </Link>

              <Link
                to="/register"
                onClick={() => setMenuOpen(false)}
                className="bg-purple-600 py-2 rounded-lg text-center text-white"
              >
                Register
              </Link>
            </>
          )}

        </div>
      )}
    </nav>
  );
}

export default Navbar;