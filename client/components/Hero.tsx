import { useInView } from "@/hooks/useInView";
import SectionDivider from "./ui/SectionDivider";

export default function Hero() {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      className="relative text-white h-screen flex items-center justify-center overflow-hidden -mt-[72px]"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg?auto=compress&cs=tinysrgb&w=1200&q=40')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundColor: "#1a1a2e",
      }}
      id="hero-section"
    >
      <style>{`
        @media (max-width: 768px) {
          section {
            background-attachment: scroll !important;
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-title {
          animation: slideInUp 0.8s ease-out forwards;
        }

        .hero-title-red {
          color: #ffffff;
        }

        .hero-title-white {
          color: #ffffff;
        }

        .hero-subtitle {
          animation: slideInUp 0.8s ease-out forwards;
          color: #ffffff;
        }

        .hero-button {
          animation: slideInUp 0.8s ease-out forwards;
        }

        ${
          isInView
            ? `
          .hero-title {
            animation-delay: 0s;
          }

          .hero-subtitle {
            animation-delay: 0.2s;
          }

          .hero-button {
            animation-delay: 0.4s;
          }
        `
            : `
          .hero-title,
          .hero-subtitle,
          .hero-button {
            opacity: 0;
            transform: translateY(30px);
          }
        `
        }
      `}</style>

      {/* Overlay for text visibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary/95"></div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 md:pt-24">
        <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8">
          Building Market Credibility for India's Growth Companies
        </h1>
        <p className="hero-subtitle text-base md:text-lg text-gray-200 mb-8 md:mb-10 max-w-3xl mx-auto">
          Strategic investor relations advisory that combine financial rigour
          with stakeholder engagement excellence - helping mid-market companies
          command attention in India's capital markets.
        </p>
        <button className="hero-button pl-3 pr-1.5 py-1.5 rounded-full font-semibold transition-all duration-300 inline-flex items-center gap-3 backdrop-blur-xl bg-primary/40 text-white border-2 border-white hover:shadow-lg hover:scale-105 shadow-lg">
          Schedule a Strategic Consultation
          <span className="flex-shrink-0 bg-white/25 border border-white/40 rounded-full w-10 h-10 flex items-center justify-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Ffcfda2dcaa5c41399e1e44107fdf402a%2Fc76f1a82d1c747c78df66373da84fda9?format=webp&width=800&height=1200"
              alt="Arrow"
              style={{
                filter: "brightness(0) invert(1)",
                maxWidth: "14px",
                maxHeight: "22px",
                objectFit: "contain",
                marginLeft: "2px",
              }}
            />
          </span>
        </button>
        <SectionDivider />
        <p className="text-gray-200 max-w-3xl mx-auto text-xs md:text-sm">
          Neumantra brings together the proven capabilities of Mantraa Advisory
          and Neubright Partners to deliver integrated IR advisory for companies
          preparing to list, transitioning to main board, or strengthening their
          market presence.
        </p>
      </div>
    </section>
  );
}
