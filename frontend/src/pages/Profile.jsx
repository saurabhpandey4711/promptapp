import { useEffect, useState } from "react";
import api from "../api/api";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {

      const loadProfile = async () => {
    try {
      const res = await api.get("/auth/profile/1");

      setUser(res.data.user);
    } catch (err) {
      console.log(err);
    }
  };

    loadProfile();
  }, []);



  if (!user) {
    return (
      <div className="text-white text-center mt-20">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0B14] flex justify-center items-center">
      <div className="bg-[#181825] w-[450px] rounded-2xl p-8">

        <div className="flex justify-center mb-6">
          <img
            src={
              user.profile_image ||
              "https://ui-avatars.com/api/?name=" + user.username
            }
            alt="profile"
            className="w-28 h-28 rounded-full object-cover"
          />
        </div>

        <h2 className="text-3xl text-center text-white font-bold">
          {user.username}
        </h2>

        <p className="text-gray-400 text-center mt-2">
          {user.email}
        </p>

        <p className="text-gray-500 text-center mt-4">
          Joined:
          {" "}
          {new Date(user.created_at).toLocaleDateString()}
        </p>

      </div>
    </div>
  );
}

export default Profile;