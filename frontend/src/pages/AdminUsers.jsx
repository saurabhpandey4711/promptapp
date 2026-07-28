import { useEffect, useState } from "react";
import AdminSidebar from "../components/admin/AdminSidebar";
import UsersTable from "../components/admin/UsersTable";

import {
  getAllUsers,
  deleteUser,
  updateUserRole,
} from "../services/adminService";

function AdminUsers() {

  const [users, setUsers] = useState([]);
  const [searchUser, setSearchUser] = useState("");

  const loadUsers = async () => {
    try {
      const res = await getAllUsers();
      setUsers(res.users);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleDelete = async (id) => {

    if (!window.confirm("Delete this user?")) return;

    try {

      const res = await deleteUser(id);

      alert(res.message);

      loadUsers();

    } catch (err) {

      alert(err.response?.data?.message || "Delete Failed");

    }

  };

  const handleRoleChange = async (id, role) => {

    try {

      const res = await updateUserRole(id, role);

      alert(res.message);

      loadUsers();

    } catch (err) {

      alert(err.response?.data?.message || "Role Update Failed");

    }

  };

  return (

    <div className="flex">

      <AdminSidebar />

      <div className="flex-1 bg-[#0B0B14] min-h-screen p-8">

        <h1 className="text-4xl text-white font-bold mb-8">
          👥 Users Management
        </h1>

        <UsersTable
          users={users}
          searchUser={searchUser}
          setSearchUser={setSearchUser}
          handleDelete={handleDelete}
          handleRoleChange={handleRoleChange}
        />

      </div>

    </div>

  );

}

export default AdminUsers;