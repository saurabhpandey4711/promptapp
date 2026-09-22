import SearchBar from "./SearchBar";



function Hero({
  search,
  setSearch,
  selectedCategory,
  setSelectedCategory,
}) {
  const categories = [
    "All",
    "Boy",
    "Girl",
    "Couple",
    "Nature",
    "Anime",
  ];

  return (
    <section className="bg-[#0B0B14] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <div>

          <span className="bg-purple-600 px-4 py-2 rounded-full text-sm">
            ✨ AI Photo Editing Prompts
          </span>

          <h1 className="text-5xl font-bold leading-tight mt-6">
            Create Stunning <br />
            <span className="text-purple-500">
              AI Photos
            </span>{" "}
            with Premium Prompts
          </h1>

          <p className="text-gray-400 mt-6">
            Discover, copy and use the best AI photo editing prompts.
          </p>

          <SearchBar
            search={search}
            setSearch={setSearch}
          />

          <div className="flex flex-wrap gap-3 mt-8">

            {categories.map((category) => (

              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full transition ${
                  selectedCategory === category
                    ? "bg-purple-600 text-white"
                    : "bg-[#161625] text-gray-300 hover:bg-purple-700"
                }`}
              >
                {category}
              </button>

            ))}

          </div>

        </div>

        {/* Right Side */}

        <div>

          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=900"
            alt="Hero"
            className="rounded-3xl w-full h-[500px] object-cover shadow-2xl"
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;