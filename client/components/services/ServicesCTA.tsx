import { useInView } from "@/hooks/useInView";
import SectionDivider from "../ui/SectionDivider";

export default function ServicesCTA() {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 transition-all duration-700 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        background:
          "linear-gradient(135deg, rgba(254, 226, 226, 0.6) 0%, rgba(219, 234, 254, 0.6) 50%, rgba(254, 240, 242, 0.6) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Ready to Elevate Your IR Capability?
        </h2>
        <SectionDivider />
        <p className="text-base text-gray-700 mb-8 max-w-4xl mx-auto mt-6">
          Every company's capital markets' journey is unique. Neumantra's
          flexible engagement models ensure support aligned to your stage,
          objectives, and resources.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-accent text-white hover:bg-red-700 pl-3 pr-1.5 py-1.5 rounded-full font-semibold transition-all duration-300 shadow-lg inline-flex items-center gap-3">
            Schedule a Consultation
            <span className="flex-shrink-0 backdrop-blur-md bg-white/25 border border-white/40 rounded-full w-10 h-10 flex items-center justify-center">
              <img src="https://cdn.builder.io/api/v1/image/assets%2Ffcfda2dcaa5c41399e1e44107fdf402a%2Fc76f1a82d1c747c78df66373da84fda9?format=webp&width=800&height=1200" alt="Arrow" style={{ filter: "brightness(0) invert(1)", maxWidth: "14px", maxHeight: "22px", objectFit: "contain", marginLeft: "2px" }} />
            </span>
          </button>
          <button className="backdrop-blur-xl bg-white/40 border-2 border-white/80 text-primary hover:bg-white/50 pl-3 pr-1.5 py-1.5 rounded-full font-semibold transition-all duration-300 shadow-lg">
            Download Service Overview
          </button>
        </div>
      </div>
    </section>
  );
}
