function AdminSearchBar({
  value,
  onChange,
  placeholder,
}) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full md:w-72 bg-[#222233] text-white px-4 py-2 rounded-lg outline-none border border-gray-700 focus:border-purple-500"
    />
  );
}

export default AdminSearchBar;