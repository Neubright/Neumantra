import { Linkedin, X, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Red accent bar */}
      <div className="h-1 bg-accent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <div className="mb-4 h-10">
              <Logo variant="white" />
            </div>
            <p className="text-sm text-gray-300 mb-6 leading-relaxed">
              Bridging the gap between corporate value and market perception
              through strategic investor relations.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <span
                className="w-10 h-10 rounded-full backdrop-blur-md bg-white/15 border border-white/30 flex items-center justify-center text-gray-300 hover:bg-white/30 hover:border-white/50 hover:text-accent transition-all duration-300 cursor-default inline-flex"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </span>
              <span
                className="w-10 h-10 rounded-full backdrop-blur-md bg-white/15 border border-white/30 flex items-center justify-center text-gray-300 hover:bg-white/30 hover:border-white/50 hover:text-accent transition-all duration-300 cursor-default inline-flex"
                aria-label="X"
              >
                <X size={18} />
              </span>
              <span
                className="w-10 h-10 rounded-full backdrop-blur-md bg-white/15 border border-white/30 flex items-center justify-center text-gray-300 hover:bg-white/30 hover:border-white/50 hover:text-accent transition-all duration-300 cursor-default inline-flex"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </span>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link to="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent transition-colors">
                  Heritage
                </Link>
              </li>
              <li>
                <span className="hover:text-accent transition-colors cursor-default">
                  Careers
                </span>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link to="/services" className="hover:text-accent transition-colors">
                  Capital Readiness
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-accent transition-colors">
                  Strategic IR
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-accent transition-colors">
                  ESG Integration
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-accent transition-colors">
                  Analyst Engagement
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">
              Contact
            </h4>
            <div className="text-sm text-gray-300 space-y-3">
              <p>
                <span className="hover:text-accent transition-colors cursor-default">
                  info@neumantra.com
                </span>
              </p>
              <p>
                <span className="hover:text-accent transition-colors cursor-default">
                  +91-22-XXXXXXX
                </span>
              </p>
              <p>Mumbai, India</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400">
          <p>&copy; 2024 Neumantra Capital Advisors. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <span className="hover:text-accent transition-colors cursor-default">
              Privacy Policy
            </span>
            <span className="hover:text-accent transition-colors cursor-default">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
