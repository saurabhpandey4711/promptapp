function StatCard({ title, value, icon }) {
  return (
    <div className="bg-[#181825] rounded-xl p-6 shadow-lg">

      <div className="text-3xl mb-3">
        {icon}
      </div>

      <h3 className="text-gray-400 text-lg">
        {title}
      </h3>

      <p className="text-white text-4xl font-bold mt-2">
        {value}
      </p>

    </div>
  );
}

export default StatCard;