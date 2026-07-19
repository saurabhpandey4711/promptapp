function Footer() {
  return (
    <footer className="bg-[#0B0B14] border-t border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-3 gap-8">

          {/* Logo */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              PromptVerse
            </h2>

            <p className="text-gray-400 mt-3">
              Discover premium AI photo editing prompts for ChatGPT,
              Midjourney, Flux and more.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-purple-400 cursor-pointer">Home</li>
              <li className="hover:text-purple-400 cursor-pointer">Trending</li>
              <li className="hover:text-purple-400 cursor-pointer">Categories</li>
              <li className="hover:text-purple-400 cursor-pointer">About</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Follow Us
            </h3>

            <div className="flex gap-4 text-gray-400">
              <span className="hover:text-white cursor-pointer">Facebook</span>
              <span className="hover:text-white cursor-pointer">Instagram</span>
              <span className="hover:text-white cursor-pointer">LinkedIn</span>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500">
          © {new Date().getFullYear()} PromptVerse. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;