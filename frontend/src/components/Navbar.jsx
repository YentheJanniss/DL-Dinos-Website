import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-gray-900/50 backdrop-blur-sm fixed w-full z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl">🦖</span>
            <span className="font-bold text-xl">DinoVision</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-8">
            <Link
              to="/"
              className={`${
                location.pathname === "/"
                  ? "text-green-400"
                  : "text-gray-300 hover:text-green-400"
              } px-3 py-2 text-sm font-medium transition-colors duration-200`}
            >
              Home
            </Link>
            <Link
              to="/classifier"
              className={`${
                location.pathname === "/classifier"
                  ? "text-green-400"
                  : "text-gray-300 hover:text-green-400"
              } px-3 py-2 text-sm font-medium transition-colors duration-200`}
            >
              Classifier
            </Link>
            <a
              href="https://github.com/yourusername/dino-classifier"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-green-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
