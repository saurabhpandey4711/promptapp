import AdminSearchBar from "./AdminSearchBar";

function UsersTable({
  users,
  searchUser,
  setSearchUser,
  handleDelete,
  handleRoleChange,
}) {

  const filteredUsers = users.filter((user) =>
    user.username
      .toLowerCase()
      .includes(searchUser.toLowerCase())
  );

  return (
    <div className="bg-[#181825] rounded-xl p-6 mt-8">

      <div className="flex justify-between items-center mb-5">

        <h2 className="text-2xl font-bold text-white">
          👥 All Users
        </h2>

      <AdminSearchBar
  value={searchUser}
  onChange={(e) => setSearchUser(e.target.value)}
  placeholder="Search User..."
/>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full text-white">

          <thead>

            <tr className="border-b border-gray-700">

              <th className="p-3 text-left">ID</th>

              <th className="p-3 text-left">
                Username
              </th>

              <th className="p-3 text-left">
                Email
              </th>

              <th className="p-3 text-left">
                Role
              </th>

              <th className="p-3 text-center">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {filteredUsers.length > 0 ? (

              filteredUsers.map((user) => (

                <tr
                  key={user.id}
                  className="border-b border-gray-800"
                >

                  <td className="p-3">
                    {user.id}
                  </td>

                  <td className="p-3">
                    {user.username}
                  </td>

                  <td className="p-3">
                    {user.email}
                  </td>

                  <td className="p-3">

                    <select
                      value={user.role}
                      onChange={(e) =>
                        handleRoleChange(
                          user.id,
                          e.target.value
                        )
                      }
                      className="bg-[#222233] px-3 py-2 rounded-lg"
                    >

                      <option value="user">
                        User
                      </option>

                      <option value="admin">
                        Admin
                      </option>

                    </select>

                  </td>

                  <td className="p-3 text-center">

                    <button
                      onClick={() =>
                        handleDelete(user.id)
                      }
                      className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td
                  colSpan="5"
                  className="text-center py-8 text-gray-400"
                >
                  No Users Found
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default UsersTable;