import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const navLinks = [
  { path: "/", label: "HOME" },
  { path: "/about", label: "ABOUT US" },
  { path: "/services", label: "SERVICES" },
  { path: "/why-us", label: "WHY US" },
  { path: "/insights", label: "INSIGHTS & RESOURCES" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
    scrollToTop();
  };

  return (
    <header className="sticky top-4 z-50 mx-4 sm:mx-6 lg:mx-8">
      <style>{`
        .nav-link {
          position: relative;
          display: inline-block;
          font-weight: 600;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 3px;
          background-color: hsl(var(--accent));
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }

        .nav-link:hover::after {
          transform: scaleX(1);
        }

        .nav-link.active {
          color: hsl(var(--accent));
        }

        .nav-link.active::after {
          transform: scaleX(1);
        }
      `}</style>
      <div className="backdrop-blur-md bg-white/90 text-primary border border-gray-200/50 rounded-lg lg:rounded-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            onClick={scrollToTop}
            className="flex items-center gap-2"
          >
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={handleNavClick}
                className={`text-sm font-medium text-primary nav-link ${
                  isActive(link.path) ? "active" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Contact Button */}
          <Link
            to="/contact"
            onClick={handleNavClick}
            className="hidden md:block bg-accent hover:bg-red-900 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
          >
            Contact Us
          </Link>

          {/* Mobile Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-primary p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden border-t border-gray-200 bg-white">
            <div className="flex flex-col py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={handleNavClick}
                  className={`px-4 py-2 text-sm font-medium text-primary nav-link block ${
                    isActive(link.path)
                      ? "active bg-gray-50"
                      : "hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={handleNavClick}
                className="mx-4 bg-accent hover:bg-red-900 text-white px-4 py-2 rounded text-sm font-medium transition-colors block text-center w-auto"
              >
                Contact Us
              </Link>
            </div>
          </nav>
        )}
      </div>
      </div>
    </header>
  );
}
