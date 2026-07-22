import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
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

        {/* Menu */}
        <div className="flex items-center gap-8">

          <Link
            to="/"
            className="text-white hover:text-purple-500 transition"
          >
            Home
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
                to="/add-prompt"
                className="text-white hover:text-purple-500 transition"
              >
                Add Prompt
              </Link>

              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg text-white transition"
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
                className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-lg text-white transition"
              >
                Register
              </Link>
            </>
          )}

        </div>

      </div>
    </nav>
  );
}

export default Navbar;