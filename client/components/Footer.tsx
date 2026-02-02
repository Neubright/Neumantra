import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Red accent bar */}
      <div className="h-1 bg-accent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Logo & Description */}
          <div>
            <div className="mb-4 h-10 opacity-60">
              <Logo variant="white" />
            </div>
            <p className="text-base text-white mb-6 leading-relaxed">
              Investor relations advisory combining financial strategy expertise
              and stakeholder engagement excellence.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full backdrop-blur-md bg-white/15 border border-white/30 flex items-center justify-center hover:bg-white/30 hover:border-white/50 transition-all duration-300 inline-flex overflow-hidden"
                aria-label="LinkedIn"
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Ffcfda2dcaa5c41399e1e44107fdf402a%2Fc70c353ad8944f4dbb75a6bb24c76824?format=webp&width=800&height=1200"
                  alt="LinkedIn"
                  className="w-6 h-6 object-contain"
                />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full backdrop-blur-md bg-white/15 border border-white/30 flex items-center justify-center hover:bg-white/30 hover:border-white/50 transition-all duration-300 inline-flex overflow-hidden"
                aria-label="X"
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Ffcfda2dcaa5c41399e1e44107fdf402a%2Fcf9919b3a7004787b1db4af92cc61251?format=webp&width=800&height=1200"
                  alt="X"
                  className="w-6 h-6 object-contain"
                />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full backdrop-blur-md bg-white/15 border border-white/30 flex items-center justify-center hover:bg-white/30 hover:border-white/50 transition-all duration-300 inline-flex overflow-hidden"
                aria-label="Medium"
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Ffcfda2dcaa5c41399e1e44107fdf402a%2Fdd9ac6c666834a50bd8895b8497ca675?format=webp&width=800&height=1200"
                  alt="Medium"
                  className="w-6 h-6 object-contain"
                />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-base font-bold text-white mb-6 uppercase tracking-wider opacity-60">
              Company
            </h4>
            <ul className="space-y-3 text-base text-white">
              <li>
                <Link
                  to="/about"
                  className="hover:text-accent transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-accent transition-colors"
                >
                  Our Approach
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-accent transition-colors"
                >
                  Leadership Team
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
            <h4 className="text-base font-bold text-white mb-6 uppercase tracking-wider opacity-60">
              Services
            </h4>
            <ul className="space-y-3 text-base text-white">
              <li>
                <Link
                  to="/services"
                  className="hover:text-accent transition-colors"
                >
                  Capital Markets Readiness
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-accent transition-colors"
                >
                  Investor Relations & Engagement
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-accent transition-colors"
                >
                  Ongoing IR Support
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-accent transition-colors"
                >
                  Service Overview
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-base font-bold text-white mb-6 uppercase tracking-wider opacity-60">
              Resources
            </h4>
            <ul className="space-y-3 text-base text-white">
              <li>
                <Link
                  to="/insights"
                  className="hover:text-accent transition-colors"
                >
                  Insights & Articles
                </Link>
              </li>
              <li>
                <span className="hover:text-accent transition-colors cursor-default">
                  Downloadable Tools
                </span>
              </li>
              <li>
                <span className="hover:text-accent transition-colors cursor-default">
                  Case Studies
                </span>
              </li>
              <li>
                <span className="hover:text-accent transition-colors cursor-default">
                  FAQs
                </span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base font-bold text-white mb-6 uppercase tracking-wider opacity-60">
              Contact
            </h4>
            <ul className="space-y-3 text-base text-white">
              <li>
                <Link
                  to="/contact"
                  className="hover:text-accent transition-colors"
                >
                  Schedule Consultation
                </Link>
              </li>
              <li>
                <a
                  href="mailto:contact@neumantra.com"
                  className="hover:text-accent transition-colors"
                >
                  General Inquiries
                </a>
              </li>
              <li>
                <span className="hover:text-accent transition-colors cursor-default">
                  Locations
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-gray-700 pt-8 pb-8">
          <h4 className="text-base font-bold text-white mb-6 uppercase tracking-wider opacity-60">
            Contact Information
          </h4>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-base text-gray-300 space-y-2">
              <p className="font-semibold">Neumantra Capital Advisors</p>
              <p>[Office Address]</p>
              <p>
                <a
                  href="mailto:contact@neumantra.com"
                  className="hover:text-accent transition-colors"
                >
                  Email: contact@neumantra.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="hover:text-accent transition-colors"
                >
                  Phone: +91-[XX]-XXXX-XXXX
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section - Legal & Copyright */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-6">
            <div className="text-sm text-gray-400 space-y-3">
              <p>© 2025 Neumantra Capital Advisors. All rights reserved.</p>
              <p className="text-gray-500">
                Neumantra Capital Advisors is an investor relations advisory
                practice combining the capabilities of Mantraa Advisory and
                Neubright Partners.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center text-sm text-gray-400 border-t border-gray-700 pt-6">
            <div className="flex gap-6">
              <span className="hover:text-accent transition-colors cursor-default">
                Privacy Policy
              </span>
              <span className="hover:text-accent transition-colors cursor-default">
                Terms of Service
              </span>
              <span className="hover:text-accent transition-colors cursor-default">
                Disclaimer
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
