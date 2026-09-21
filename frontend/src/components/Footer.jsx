
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin
} from "react-icons/fa";

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
             <li> <a href="/" className="text-gray-400 hover:text-purple-500 transition" >
                Home
              </a> </li>
             <li> <a href="/#trending" className="text-gray-400 hover:text-purple-500 transition" >
                Trending
              </a></li>
             <li><a href="/#categories" className="text-gray-400 hover:text-purple-500 transition" >
                Categories
              </a></li>
             <li> <a href="/profile" className="text-gray-400 hover:text-purple-500 transition" >
                profile
              </a></li>
            </ul>

            

          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Follow Us
            </h3>

            <div className="flex gap-4 text-gray-400">
              <span className="hover:text-white cursor-pointer"> <a
                href="https://www.facebook.com/profile.php?id=100064107977753"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 text-2xl transition"
              >
                <FaFacebook />
              </a>
              </span>
              <span className="hover:text-white cursor-pointer"><a
                href="https://www.instagram.com/saurabhpandit4711/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 text-2xl transition"
              >
                <FaInstagram />
              </a>
              </span>
              <span className="hover:text-white cursor-pointer"><a
                  href="https://www.linkedin.com/in/saurabh-pandey-916b74394?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 text-2xl transition"
                >
                  <FaLinkedin />
                </a>
              </span>
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