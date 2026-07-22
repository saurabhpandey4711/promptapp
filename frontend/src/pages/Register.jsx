import { useState } from "react";
import { registerUser } from "../services/authService";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
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
      const res = await registerUser(formData);

      toast.success(res.data.message);

      navigate("/login");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Registration Failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0B14] flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-[#151521] p-8 rounded-2xl w-[400px]"
      >
        <h2 className="text-3xl text-white font-bold mb-6">
          Register
        </h2>

        <input
          type="text"
          name="username"
          placeholder="Username"
          className="w-full mb-4 p-3 rounded bg-[#222233] text-white"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full mb-4 p-3 rounded bg-[#222233] text-white"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full mb-6 p-3 rounded bg-[#222233] text-white"
          onChange={handleChange}
        />

        <button className="w-full bg-purple-600 py-3 rounded-lg text-white hover:bg-purple-700">
          Register
        </button>

        <p className="text-gray-400 text-center mt-5">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-500">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;