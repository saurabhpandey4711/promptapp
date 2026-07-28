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
      className="w-full p-3 rounded-lg bg-[#222233] text-white border border-gray-700 outline-none focus:border-purple-500"
    />
  );
}

export default AdminSearchBar;