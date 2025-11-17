import { useState } from "react";
import mustPlayLogo from "../assets/images/mustplay.png";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigations = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Added VR item (external link)
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/games", label: "Games" },
    { path: "https://vam.one", label: "VR", external: true },  // << NEW
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path) => location.pathname === path;

  const handleScrollOrRoute = (e, item) => {
    if (item.scrollTo) {
      e.preventDefault();
      document
        .getElementById(item.scrollTo)
        ?.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-20 h-20 treasure-gradient rounded-lg flex items-center justify-center animate-pulse-glow group-hover:scale-110 transition-transform">
              <img
                src={mustPlayLogo}
                alt="Must Play Games Logo"
                className="text-purple-900 font-bold text-lg w-full h-full object-contain"
              />
            </div>
            <span className="text-white font-bold text-xl text-candy group-hover:scale-105 transition-transform">
              Must Play Games
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-300 transition-all duration-300 font-medium relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300" />
                </a>
              ) : item.scrollTo ? (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => handleScrollOrRoute(e, item)}
                  className={`text-white hover:text-yellow-300 transition-all duration-300 font-medium relative group ${
                    isActive(item.path) ? "text-yellow-300" : ""
                  }`}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300" />
                </a>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-white hover:text-yellow-300 transition-all duration-300 font-medium relative group ${
                    isActive(item.path)
                      ? "text-yellow-300 border border-white rounded-full px-4 py-1"
                      : ""
                  }`}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300" />
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen((v) => !v)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10 glass-card-dark rounded-b-2xl mt-2">
            <div className="flex flex-col space-y-4 stagger-animation">
              {navItems.map((item) =>
                item.external ? (
                  <a
                    key={item.label}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-yellow-300 transition-colors font-medium p-2 rounded-lg hover:bg-white/10"
                  >
                    {item.label}
                  </a>
                ) : item.scrollTo ? (
                  <a
                    key={item.path}
                    href={item.path}
                    onClick={(e) => handleScrollOrRoute(e, item)}
                    className={`text-white hover:text-yellow-300 transition-colors font-medium p-2 rounded-lg hover:bg-white/10 ${
                      isActive(item.path) ? "text-yellow-300 bg-white/10" : ""
                    }`}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-white hover:text-yellow-300 transition-colors font-medium p-2 rounded-lg hover:bg-white/10 ${
                      isActive(item.path) ? "text-yellow-300 bg-white/10" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigations;
