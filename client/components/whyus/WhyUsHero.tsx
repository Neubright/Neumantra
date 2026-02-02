import { useInView } from "@/hooks/useInView";
import SectionDivider from "@/components/ui/SectionDivider";

export default function WhyUsHero() {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      className="relative text-white h-screen flex items-center justify-center overflow-hidden -mt-[72px]"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/5716037/pexels-photo-5716037.jpeg?auto=compress&cs=tinysrgb&w=1200&q=40')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundColor: "#1a1a2e",
      }}
    >
      <style>{`
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

      {/* Overlay for text visibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/80 to-primary/85"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 md:pt-24">
        <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8">
          Why Us
        </h1>
        <p className="hero-subtitle text-base md:text-lg text-gray-200 mb-8 md:mb-10 max-w-3xl mx-auto">
          Distinctive expertise in finance, communication, and capital markets strategy
        </p>
        <SectionDivider />
      </div>
    </section>
  );
}
