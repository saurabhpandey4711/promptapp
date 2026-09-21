import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaShieldAlt, FaCalendarAlt } from "react-icons/fa";
import api from "../api/api";

function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const res = await api.get("/auth/me");

        setUser(res.data.user);
      } catch (err) {
        console.log("Profile Error:", err);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0B0B14] flex justify-center items-center">
        <p className="text-white text-lg">
          Loading Profile...
        </p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-[#0B0B14] flex justify-center items-center">
        <div className="text-center">
          <p className="text-red-400 text-lg mb-4">
            Unable to load profile
          </p>

          <Link
            to="/login"
            className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg"
          >
            Login Again
          </Link>
        </div>
      </div>
    );
  }

 const backendUrl = "http://localhost:5000";

const profileImage = user.profile_image
  ? `${backendUrl}${user.profile_image}`
  : `https://ui-avatars.com/api/?name=${encodeURIComponent(
      user.username
    )}&background=7c3aed&color=fff&size=200`;

  return (
    <div className="min-h-screen bg-[#0B0B14] text-white px-4 py-10">

      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold mb-8">
          My Profile
        </h1>

        {/* Profile Card */}
        <div className="bg-[#181825] rounded-2xl overflow-hidden border border-gray-800">

          {/* Cover */}
          <div className="h-32 md:h-40 bg-gradient-to-r from-purple-700 to-indigo-900">
          </div>

          {/* Profile Info */}
          <div className="px-6 md:px-10 pb-8">

            {/* Image */}
            <div className="-mt-16 mb-5">

              <img
                src={profileImage}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-[#181825]"
              />

            </div>

            {/* Name */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">

              <div>

                <h2 className="text-3xl font-bold">
                  {user.username}
                </h2>

                <p className="text-gray-400 mt-1">
                  {user.email}
                </p>

              </div>

              <Link
                to="/edit-profile"
                className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-lg transition text-center"
              >
                Edit Profile
              </Link>

            </div>

            {/* Divider */}
            <div className="border-t border-gray-700 my-8">
            </div>

            {/* User Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <div className="bg-[#222233] rounded-xl p-5">

                <div className="flex items-center gap-3">

                  <FaUser className="text-purple-500" />

                  <div>
                    <p className="text-gray-400 text-sm">
                      Username
                    </p>

                    <p className="font-semibold mt-1">
                      {user.username}
                    </p>
                  </div>

                </div>

              </div>

              <div className="bg-[#222233] rounded-xl p-5">

                <div className="flex items-center gap-3">

                  <FaEnvelope className="text-purple-500" />

                  <div>
                    <p className="text-gray-400 text-sm">
                      Email
                    </p>

                    <p className="font-semibold mt-1 break-all">
                      {user.email}
                    </p>
                  </div>

                </div>

              </div>

              <div className="bg-[#222233] rounded-xl p-5">

                <div className="flex items-center gap-3">

                  <FaShieldAlt className="text-purple-500" />

                  <div>
                    <p className="text-gray-400 text-sm">
                      Account Role
                    </p>

                    <p className="font-semibold mt-1 capitalize">
                      {user.role}
                    </p>
                  </div>

                </div>

              </div>

              <div className="bg-[#222233] rounded-xl p-5">

                <div className="flex items-center gap-3">

                  <FaCalendarAlt className="text-purple-500" />

                  <div>
                    <p className="text-gray-400 text-sm">
                      Joined
                    </p>

                    <p className="font-semibold mt-1">
                      {new Date(
                        user.created_at
                      ).toLocaleDateString()}
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;