import { useInView } from "@/hooks/useInView";
import SectionDivider from "./ui/SectionDivider";

export default function CTA() {
  const [ref, isInView] = useInView();
  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 transition-all duration-700 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        background:
          "radial-gradient(circle at 50% 50%, rgba(219, 234, 254, 0.5) 0%, rgba(254, 226, 226, 0.4) 50%, rgba(248, 223, 228, 0.5) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Ready to Strengthen Your Capital Markets Presence?
        </h2>
        <SectionDivider />
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Whether you're preparing for listing, transitioning to main board, or
          building sustained investor engagement, Neumantra provides the
          strategic IR partnership that growth-focused companies require.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-accent text-white hover:bg-red-700 pl-3 pr-1.5 py-1.5 rounded-full font-semibold transition-all duration-300 shadow-lg inline-flex items-center gap-3">
            Schedule a Consultation
            <span className="flex-shrink-0 backdrop-blur-md bg-white/25 border border-white/40 rounded-full w-10 h-10 flex items-center justify-center">
              <img src="https://cdn.builder.io/api/v1/image/assets%2Ffcfda2dcaa5c41399e1e44107fdf402a%2Fc76f1a82d1c747c78df66373da84fda9?format=webp&width=800&height=1200" alt="Arrow" style={{ filter: "brightness(0) invert(1)", maxWidth: "14px", maxHeight: "22px", objectFit: "contain", marginLeft: "2px" }} />
            </span>
          </button>
          <button className="backdrop-blur-xl bg-white/40 border-2 border-white/80 text-primary hover:bg-white/50 px-3 py-1.5 rounded-full font-semibold transition-all duration-300 shadow-lg">
            Download IR Readiness Assessment
          </button>
        </div>
      </div>
    </section>
  );
}
