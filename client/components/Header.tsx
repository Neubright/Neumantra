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

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Overlay when menu is open */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-md z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      <header className="sticky top-4 z-50 mx-6 sm:mx-10 lg:mx-20">
        <style>{`
        .nav-link {
          position: relative;
          display: inline-block;
          font-weight: 600;
          transition: color 0.3s ease;
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

        @media (min-width: 768px) {
          .nav-link {
            transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }

          .nav-link:hover:not(.active) {
            color: hsl(var(--accent));
          }

          .nav-link:hover::after {
            display: none;
          }

          .nav-link.active {
            background: rgba(255, 255, 255, 0.9);
            border: 1px solid rgba(220, 38, 38, 0.3);
            padding: 8px 16px;
            border-radius: 20px;
            color: hsl(var(--accent));
          }

          .nav-link.active::after {
            display: none;
          }
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
          animation: slideDown 0.8s ease-out forwards;
        }

        .mobile-menu-exit {
          animation: slideUp 0.8s ease-in forwards;
        }

        .menu-icon {
          transition: transform 0.3s ease;
        }

        .menu-icon.open {
          transform: rotate(0deg);
        }
      `}</style>
        <div
          className={`backdrop-blur-2xl rounded-full shadow-apple transition-all duration-300 ${
            isMenuOpen
              ? "text-primary"
              : isOverDarkBackground
                ? "text-white"
                : "text-primary"
          }`}
          style={{
            background: isMenuOpen
              ? "linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)"
              : isOverDarkBackground
                ? "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.90) 100%)"
                : "linear-gradient(135deg, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0.65) 100%)",
            backdropFilter: isMenuOpen ? "none" : "blur(20px)",
            borderWidth: isMenuOpen ? "0" : "1px",
            borderStyle: "solid",
            borderColor: isMenuOpen
              ? "transparent"
              : isOverDarkBackground
                ? "rgba(255, 255, 255, 0.5)"
                : "rgba(255, 255, 255, 0.25)",
            boxShadow: isMenuOpen
              ? "inset 0 1px 1px 0 rgba(255, 255, 255, 1), 0 8px 32px 0 rgba(31, 38, 135, 0.15)"
              : isOverDarkBackground
                ? "inset 0 1px 1px 0 rgba(255, 255, 255, 1), 0 8px 32px 0 rgba(31, 38, 135, 0.3)"
                : "inset 0 1px 1px 0 rgba(255, 255, 255, 0.8), 0 8px 32px 0 rgba(31, 38, 135, 0.15)",
          }}
        >
          <div className="max-w-7xl mx-auto px-1 sm:px-1 lg:px-2">
            <div className="flex items-center justify-between h-14">
              {/* Logo */}
              <Link
                to="/"
                onClick={scrollToTop}
                className="flex items-center gap-2 ml-2 sm:ml-3"
                style={{
                  transform: "scale(0.9)",
                  transformOrigin: "left center",
                }}
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
                      isMenuOpen || isOverDarkBackground
                        ? "text-primary"
                        : "text-primary"
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
                className="hidden md:block bg-primary hover:bg-primary/90 text-white px-3 py-1.5 rounded-full font-semibold transition-all duration-300 shadow-apple"
              >
                Contact Us
              </Link>

              {/* Mobile Hamburger Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`md:hidden p-2 transition-colors ${
                  isMenuOpen || isOverDarkBackground
                    ? "text-primary"
                    : "text-primary"
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
          </div>
        </div>

        {/* Mobile Menu - Outside glass island, positioned absolutely */}
        {isMenuOpen && (
          <nav
            className={`md:hidden mobile-menu-enter absolute top-full left-6 right-6 sm:left-10 sm:right-10 lg:left-20 lg:right-20 z-40 rounded-b-3xl`}
            style={{
              background:
                "linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.7) 100%)",
              backdropFilter: "blur(20px)",
              borderWidth: "0",
              borderStyle: "solid",
              borderColor: "transparent",
              boxShadow:
                "inset 0 1px 1px 0 rgba(255, 255, 255, 0.8), 0 8px 32px 0 rgba(31, 38, 135, 0.15)",
              marginTop: "-1px",
            }}
          >
            <div className="flex flex-col pt-2 pb-4 space-y-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-5">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={handleNavClick}
                  className={`px-4 py-2 text-sm font-medium block ${
                    isActive(link.path) ? "text-accent" : "text-primary"
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
      </header>
    </>
  );
}
