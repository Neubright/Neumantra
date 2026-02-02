import { useInView } from "@/hooks/useInView";
import SectionDivider from "../ui/SectionDivider";

export default function IdealClientProfile() {
  const [ref, isInView] = useInView();

  const idealClients = [
    "Are mid-market size (₹500-10,000 crore revenue or market cap range)",
    "Have strong business fundamentals deserving better market recognition",
    "Are preparing for listing, transitioning from SME, or seeking enhanced IR for existing listing",
    "Value strategic counsel over tactical execution services alone",
    "Are committed to governance strengthening and professional market engagement",
    "Expect accountability, transparency, and measurable outcomes from advisors",
  ];

  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 transition-all duration-700 ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{
        background:
          "linear-gradient(135deg, rgba(254, 226, 226, 0.6) 0%, rgba(219, 234, 254, 0.6) 50%, rgba(254, 240, 242, 0.6) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Is Neumantra Right for Your Company?
          </h2>
          <SectionDivider />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="backdrop-blur-xl bg-white/30 border-2 border-white/80 rounded-lg p-8 hover:shadow-2xl transition-all duration-300 hover:bg-white/40 hover:border-white/100">
            <h3 className="text-xl font-bold text-primary mb-6">Ideal Client Profile</h3>
            <p className="text-gray-700 text-base mb-6 font-semibold">
              Neumantra delivers maximum value for companies that:
            </p>
            <ul className="space-y-3">
              {idealClients.map((item, index) => (
                <li key={index} className="text-gray-700 text-base flex items-start">
                  <span className="text-accent mr-3 text-lg flex-shrink-0 font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
