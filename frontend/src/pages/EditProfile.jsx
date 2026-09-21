import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

function EditProfile() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    profile_image: "",
  });
  const [profileImage, setProfileImage] = useState(null);
  
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const res = await api.get("/auth/me");

        const currentUser = res.data.user;

        setUser(currentUser);

        setFormData({
          username: currentUser.username || "",
          email: currentUser.email || "",
          profile_image: currentUser.profile_image || "",
        });
      } catch (err) {
        console.log("Profile Error:", err);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) return;

    try {
      setSaving(true);

const data = new FormData();

data.append("username", formData.username);
data.append("email", formData.email);

if (profileImage) {
  data.append("profile_image", profileImage);
}

const res = await api.put(
  `/auth/profile/${user.id}`,
  data
);

      alert(
        res.data.message || "Profile Updated Successfully"
      );

      navigate("/profile");
    } catch (err) {
      console.log("Update Error:", err);

      alert(
        err.response?.data?.message ||
          "Profile Update Failed"
      );
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0B0B14] flex justify-center items-center text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0B14] text-white px-4 py-10">

      <div className="max-w-2xl mx-auto">

        <h1 className="text-3xl font-bold mb-8">
          Edit Profile
        </h1>

        <div className="bg-[#181825] rounded-2xl p-6 md:p-8 border border-gray-800">

          <form onSubmit={handleSubmit}>

            {/* Username */}
            <div className="mb-5">

              <label className="block text-gray-300 mb-2">
                Username
              </label>

              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full bg-[#222233] border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-purple-500"
              />

            </div>

            {/* Email */}
            <div className="mb-5">

              <label className="block text-gray-300 mb-2">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-[#222233] border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-purple-500"
              />

            </div>

            {/* Profile Image */}
            <div className="mb-6">

              <label className="block text-gray-300 mb-2">
                Profile Image URL
              </label>

                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setProfileImage(e.target.files[0])}
                    className="w-full bg-[#222233] border border-gray-700 rounded-lg px-4 py-3 text-gray-300"
                 />

            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">

              <button
                type="submit"
                disabled={saving}
                className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg transition disabled:opacity-50"
              >
                {saving ? "Saving..." : "Save Changes"}
              </button>

              <button
                type="button"
                onClick={() => navigate("/profile")}
                className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg transition"
              >
                Cancel
              </button>

            </div>

          </form>

        </div>

      </div>

    </div>
  );
}

export default EditProfile;