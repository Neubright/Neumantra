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

      {/* Blue-tinted overlay for background image */}
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(15, 37, 71, 0.40)" }}></div>
      <div className="relative mx-4 sm:mx-6 md:mx-10 lg:mx-20 py-12 md:py-16">
        <div className="backdrop-blur-2xl bg-white/15 border-2 border-white/90 rounded-xl p-4 sm:p-6 md:p-8 lg:p-12 mt-20">
          <div className="text-center w-full">
        <h1 className="hero-title text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 px-2">
          <span className="text-accent">Building</span> Market <span className="text-accent">Credibility</span> for India's Growth Companies
        </h1>
        <p className="hero-subtitle text-base lg:text-lg text-gray-200 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto px-2">
          Strategic investor relations advisory that combine financial rigour
          with stakeholder engagement excellence - helping mid-market companies
          command attention in India's capital markets.
        </p>
        <button className="hero-button px-2 sm:pl-3 sm:pr-1.5 py-1.5 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 inline-flex items-center gap-2 sm:gap-3 backdrop-blur-2xl text-primary border-2 border-red-300/70 hover:shadow-apple hover:scale-105 group whitespace-nowrap" style={{
          background: "linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.75) 100%)",
        }}>
          Schedule a <span className="hidden sm:inline">Strategic </span>Consultation
          <span className="flex-shrink-0 bg-primary rounded-full w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center group-hover:bg-primary/90 transition-all duration-300">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Ffcfda2dcaa5c41399e1e44107fdf402a%2Fc76f1a82d1c747c78df66373da84fda9?format=webp&width=800&height=1200"
              alt="Arrow"
              style={{
                filter: "brightness(0) invert(1)",
                maxWidth: "12px",
                maxHeight: "18px",
                objectFit: "contain",
                marginLeft: "2px",
              }}
            />
          </span>
        </button>
        <SectionDivider />
        <p className="text-gray-200 max-w-3xl mx-auto text-base px-2">
          Neumantra brings together the proven capabilities of Mantraa Advisory
          and Neubright Partners to deliver integrated IR advisory for companies
          preparing to list, transitioning to main board, or strengthening their
          market presence.
        </p>
          </div>
        </div>
      </div>
    </section>
  );
}
