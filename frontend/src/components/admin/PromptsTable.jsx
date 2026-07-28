function PromptsTable({
  prompts,
  searchPrompt,
  setSearchPrompt,
  handlePromptDelete,
}) {

  const filteredPrompts = prompts.filter((prompt) =>
    prompt.title
      .toLowerCase()
      .includes(searchPrompt.toLowerCase())
  );

  return (
    <div className="bg-[#181825] rounded-xl p-6 mt-8">

      <div className="flex justify-between items-center mb-5">

        <h2 className="text-2xl font-bold text-white">
          📝 All Prompts
        </h2>

        <input
          type="text"
          placeholder="Search Prompt..."
          value={searchPrompt}
          onChange={(e) =>
            setSearchPrompt(e.target.value)
          }
          className="bg-[#222233] text-white px-4 py-2 rounded-lg outline-none w-72"
        />

      </div>

      <div className="overflow-x-auto">

        <table className="w-full text-white">

          <thead>

            <tr className="border-b border-gray-700">

              <th className="p-3 text-left">ID</th>

              <th className="p-3 text-left">Title</th>

              <th className="p-3 text-left">Category</th>

              <th className="p-3 text-left">User</th>

              <th className="p-3 text-left">Views</th>

              <th className="p-3 text-left">Copies</th>

              <th className="p-3 text-center">Action</th>

            </tr>

          </thead>

          <tbody>

            {filteredPrompts.length > 0 ? (

              filteredPrompts.map((prompt) => (

                <tr
                  key={prompt.id}
                  className="border-b border-gray-800"
                >

                  <td className="p-3">{prompt.id}</td>

                  <td className="p-3">{prompt.title}</td>

                  <td className="p-3">{prompt.category}</td>

                  <td className="p-3">{prompt.username}</td>

                  <td className="p-3">{prompt.views}</td>

                  <td className="p-3">{prompt.copies}</td>

                  <td className="p-3 text-center">

                    <button
                      onClick={() =>
                        handlePromptDelete(prompt.id)
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
                  colSpan="7"
                  className="text-center py-8 text-gray-400"
                >
                  No Prompts Found
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default PromptsTable;