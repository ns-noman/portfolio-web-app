import Link from "next/link";
import {
  FiGithub,
  FiLinkedin,
  FiGlobe,
  FiMail,
} from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 border-t border-gray-800">
      <div className="container mx-auto px-4">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-bold tracking-wide">
              Nowab Shorif Noman
            </h2>
            <p className="text-gray-400 text-sm mt-1">
              Web Application Developer • Laravel • React • Next.js
            </p>
          </div>

          {/* Middle Links */}
          <div className="flex items-center gap-4">

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center border border-gray-700 hover:bg-white hover:text-black transition rounded-md"
            >
              <FiGithub />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center border border-gray-700 hover:bg-blue-600 transition rounded-md"
            >
              <FiLinkedin />
            </a>

            <a
              href="mailto:your@email.com"
              className="w-9 h-9 flex items-center justify-center border border-gray-700 hover:bg-green-600 transition rounded-md"
            >
              <FiMail />
            </a>

            <a
              href="https://your-website.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center border border-gray-700 hover:bg-gray-700 transition rounded-md"
            >
              <FiGlobe />
            </a>

          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-gray-800 pt-4 text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()}{" "}
            <Link href="/" className="text-white font-semibold hover:text-gray-300">
              Nowab Shorif
            </Link>
            . All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}