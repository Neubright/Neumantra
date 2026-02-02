import { useState, useEffect } from "react";
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
  const [isOverDarkBackground, setIsOverDarkBackground] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const headerElement = document.querySelector("header");
      if (!headerElement) return;

      const headerRect = headerElement.getBoundingClientRect();
      const centerX = window.innerWidth / 2;
      const centerY = headerRect.top + headerRect.height / 2;

      // Create a temporary element to check background color
      const element = document.elementFromPoint(centerX, centerY);

      if (element) {
        const computedStyle = window.getComputedStyle(element);
        let bgColor = computedStyle.backgroundColor;

        // Walk up the DOM tree to find a meaningful background color
        let current = element;
        let iterations = 0;
        while (
          (bgColor === "rgba(0, 0, 0, 0)" || bgColor === "transparent") &&
          iterations < 10
        ) {
          current = current.parentElement;
          if (!current) break;
          bgColor = window.getComputedStyle(current).backgroundColor;
          iterations++;
        }

        // Parse RGB values to determine if it's dark or light
        const rgbMatch = bgColor.match(/\d+/g);
        if (rgbMatch) {
          const [r, g, b] = rgbMatch.map(Number);
          // Calculate luminance
          const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
          setIsOverDarkBackground(luminance < 0.5);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header className="sticky top-4 z-50 mx-6 sm:mx-10 lg:mx-20">
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

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-20px);
          }
        }

        .mobile-menu-enter {
          animation: slideDown 0.3s ease-out forwards;
        }

        .mobile-menu-exit {
          animation: slideUp 0.3s ease-in forwards;
        }

        .menu-icon {
          transition: transform 0.3s ease;
        }

        .menu-icon.open {
          transform: rotate(0deg);
        }
      `}</style>
      <div
        className={`backdrop-blur-2xl rounded-full shadow-2xl transition-all duration-300 ${
          isOverDarkBackground ? "text-white" : "text-primary"
        }`}
        style={{
          background: isOverDarkBackground
            ? "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.90) 100%)"
            : "linear-gradient(135deg, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0.65) 100%)",
          backdropFilter: "blur(20px)",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: isOverDarkBackground
            ? "rgba(255, 255, 255, 0.5)"
            : "rgba(255, 255, 255, 0.25)",
          boxShadow: isOverDarkBackground
            ? "inset 0 1px 1px 0 rgba(255, 255, 255, 1), 0 8px 32px 0 rgba(31, 38, 135, 0.3)"
            : "inset 0 1px 1px 0 rgba(255, 255, 255, 0.8), 0 8px 32px 0 rgba(31, 38, 135, 0.15)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-5">
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
                  className={`text-sm font-medium nav-link transition-colors ${
                    isOverDarkBackground ? "text-white" : "text-primary"
                  } ${isActive(link.path) ? "active" : ""}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Contact Button */}
            <Link
              to="/contact"
              onClick={handleNavClick}
              className="hidden md:block bg-accent hover:bg-red-900 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
            >
              Contact Us
            </Link>

            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 transition-colors ${
                isOverDarkBackground ? "text-white" : "text-primary"
              }`}
              aria-label="Toggle menu"
            >
              <div className="menu-icon open relative w-6 h-6 flex items-center justify-center">
                {isMenuOpen ? (
                  <X size={24} className="absolute" />
                ) : (
                  <Menu size={24} className="absolute" />
                )}
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <nav
              className={`md:hidden border-t transition-colors ${
                isOverDarkBackground
                  ? "border-gray-300 bg-white"
                  : "border-gray-200 bg-white"
              }`}
            >
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
                  className="mx-4 bg-accent hover:bg-red-900 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors block text-center w-auto"
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
