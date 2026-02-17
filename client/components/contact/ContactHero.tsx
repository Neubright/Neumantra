import { useInView } from "@/hooks/useInView";
import SectionDivider from "@/components/ui/SectionDivider";

export default function ContactHero() {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      className="relative text-white h-screen flex items-center justify-center overflow-hidden -mt-[72px]"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/33175650/pexels-photo-33175650.jpeg?auto=compress&cs=tinysrgb&w=1200&q=40')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundColor: "#1a1a2e",
      }}
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

        .hero-subtitle {
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
        `
            : `
          .hero-title,
          .hero-subtitle {
            opacity: 0;
            transform: translateY(30px);
          }
        `
        }
      `}</style>

      {/* Blue-tinted overlay for background image */}
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(15, 37, 71, 0.40)" }}></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="backdrop-blur-2xl bg-white/15 border-2 border-white/90 rounded-xl p-8 md:p-12 mt-20">
          <div className="text-center">
        <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8">
          Contact Us
        </h1>
        <SectionDivider />
        <p className="hero-subtitle text-base md:text-lg text-gray-200 mb-8 md:mb-10 max-w-3xl mx-auto">
          Let's Discuss Your Capital Markets Journey
        </p>
          </div>
        </div>
      </div>
    </section>
  );
}
