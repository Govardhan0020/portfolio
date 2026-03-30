
import React from "react";
import { useTheme } from "../hooks/ThemeContext";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <footer
      className={`${
        isDark
          ? "bg-black text-gray-300 border-gray-800"
          : "bg-white text-gray-700 border-gray-200"
      } border-t transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-4">
        {/* Logo & About */}
        <div>
          <h2 className="text-xl font-bold text-blue-500">Govardhan Jujaru </h2>
          <p
            className={`mt-3 text-sm ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Frontend Developer creating modern and responsive web applications
            using React and Tailwind CSS.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-500">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-500">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="flex items-center gap-2 text-sm">
            <Mail size={16} /> govardhanjpg6940@gmail.com
          </p>
          <p className="mt-2 text-sm">📍 India</p>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold mb-3">Follow Me</h3>
          <div className="flex gap-4 text-lg">
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div
        className={`border-t text-center py-4 text-sm ${
          isDark
            ? "border-gray-800 text-gray-500"
            : "border-gray-200 text-gray-600"
        }`}
      >
        © 2026 Govardhan. All rights reserved.
      </div>
    </footer>
  );
};
