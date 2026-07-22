import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

import { loginUser } from "../services/authService";
import { useAuth } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await loginUser(formData);

      login(res.data.token);

      toast.success(res.data.message);

      navigate("/");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Login Failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0B14] flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-[#151521] p-8 rounded-2xl w-[400px]"
      >
        <h2 className="text-3xl text-white font-bold mb-6 text-center">
          Login
        </h2>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-4 p-3 rounded-lg bg-[#222233] text-white outline-none"
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full mb-6 p-3 rounded-lg bg-[#222233] text-white outline-none"
        />

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-lg text-white font-semibold"
        >
          Login
        </button>

        <p className="text-center text-gray-400 mt-5">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-purple-500 hover:underline"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;